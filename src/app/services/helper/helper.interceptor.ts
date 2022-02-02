import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { ApiHelperService } from './api-helper.service';
import { ErrMsg } from 'src/app/ui/error/error';

@Injectable({
  providedIn: 'root'
})
export class HelperInterceptor implements HttpInterceptor {

  constructor(
    private apiS: ApiHelperService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!env.token) {
      req = req.clone({
      setHeaders:
          {
            // Authorization: `Bearer ${env.token}`
            Authorization: `Basic ${btoa('jrolidevo00:eEBX-eK2mDV*u5MD')}`
          }
      });
    }

    return next.handle(req)
    .pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        // console.log(`Interceptor err: ${err}`);
        // console.log(`Interceptor err.error: ${err.error}`);
        // console.log(`Error: ${req.url}`);
        const errorMessage = this.setError(err);
        this.apiS.ErrSub.next(errorMessage);
        return throwError(errorMessage);
      }));

  }

  setError(err: HttpErrorResponse): string {
    let errorMessage = `Unknown error occurred`;
    if (err.error instanceof ErrorEvent) {
      // client side errors
      errorMessage = err.error.message;
    } else {
      // server side errors
      if (err.status !== 0) { errorMessage = err.error; }
      }
    return errorMessage;
  }
}


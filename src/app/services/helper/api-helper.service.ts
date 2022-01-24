import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrMsg } from 'src/app/ui/error/error';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  ErrSub: Subject<ErrMsg> = new Subject<ErrMsg>();

  constructor(
  ) {}

  buildURL(path: string, data: object): string {
    const url = new URL(`${env.baseURL}/${path}`);
    Object.entries(data).map(value => url.searchParams.set(value[0], value[1]));
    return url.toString();
  }
}

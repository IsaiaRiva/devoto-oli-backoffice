import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  userLogin(sessionId: string): Observable<any> {
    return this.http.post(`${env.baseURL}${env.loginURL}/login`, {}, { params: { sessionId } });
  }

  userLogout(): Observable<any> | undefined{
    // [ ] TODO put the condition in the component env.isLogged
      return this.http.post(`${env.baseURL}${env.loginURL}/logout`, {});
  }
}

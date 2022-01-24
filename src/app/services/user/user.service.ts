import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserBrowsers(email: string): Observable<any> {
    // [ ] TODO must be admin
    return this.http.get(`${env.baseURL}${env.userURL}/list`, { params: { email } } );
  }

  deleteUserBrowser(id: number) {
    // [ ] TODO must be admin
    console.log(`User with id: ${id} had been deleted from database`);
    this.http.delete(`${env.baseURL}${env.userURL}/item/${id}`);
  }
}

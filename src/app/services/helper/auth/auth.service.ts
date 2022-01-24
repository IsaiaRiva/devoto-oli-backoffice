import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? this.isExpired(token) : false;
  }

  isExpired(token: string): boolean {
      const payload = atob(token.split('.')[1]);
      const parsedPayload = JSON.parse(payload);
      return parsedPayload.exp > Date.now() / 1000;
  }
}

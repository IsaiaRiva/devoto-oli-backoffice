import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor (
    private http: HttpClient
  ) { }

  getDevicesTable(): Observable<any> {
    return this.http.get(`${env.locationUrl}/devices`);
  }
}

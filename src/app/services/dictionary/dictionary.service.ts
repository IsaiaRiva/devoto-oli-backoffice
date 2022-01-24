import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(
    private http: HttpClient
  ) { }

  uploadDictionary(file: File): Observable<any> {
    // [ ] TODO must be admin and file zip
    return this.http.post(`${env.baseURL}${env.dicURL}/upload`, file);
  }

  getDictionaryImportStatus(index: string): Observable<any> {
    // [ ] TODO must be admin, path params? but ex with query param [index]
    return this.http.get(`${env.baseURL}${env.dicURL}/getImportStatus/${index}`);
    // return this.http.get(`${env.baseURL}${env.dicURL}/getImportStatus`, { params: { index } });
  }

  getDictionaryImportHistory(pageNo: string = '0', pageSize: string = '10'): Observable<any> {
    // [ ] TODO must be admin
    return this.http.get(`${env.baseURL}${env.dicURL}/getImportHistory`, { params: { pageNo, pageSize } });
  }

  activateDictionary(id: number): Observable<any> {
    // [ ] TODO must be admin
    return this.http.get(`${env.baseURL}${env.dicURL}/activate/${id}`);
  }
}



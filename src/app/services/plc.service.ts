import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlcService {

  private apiUrl = 'http://localhost:8081/api/plc';

  constructor(private http: HttpClient) { }

  // citește valoarea test_flag
  readTestFlag(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/test_flag`);
  }

  // scrie valoarea test_flag
  writeTestFlag(value: boolean): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/test_flag`, value);
  }
}

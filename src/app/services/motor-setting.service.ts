import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MotorSetting {
  motorName: string;
  velocity: number;
  acceleration: number;
  deceleration: number;
  jogVelocity: number;
}

@Injectable({
  providedIn: 'root'
})
export class MotorSettingService {
  private apiUrl = 'http://localhost:8081/api/motors';

  constructor(private http: HttpClient) { }

  getAll(): Observable<MotorSetting[]> {
    return this.http.get<MotorSetting[]>(this.apiUrl);
  }

  getByMotorName(motorName: string): Observable<MotorSetting> {
    return this.http.get<MotorSetting>(`${this.apiUrl}/${motorName}`);
  }

  create(setting: MotorSetting): Observable<void> {
    return this.http.post<void>(this.apiUrl, setting);
  }

  update(motorName: string, setting: MotorSetting): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${motorName}`, setting);
  }

  delete(motorName: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${motorName}`);
  }
}

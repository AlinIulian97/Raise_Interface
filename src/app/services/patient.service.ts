import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Patient } from '../model/model/patient.model';

@Injectable({
  providedIn: 'root' // must be root for standalone components
})
export class PatientService {
  private baseUrl = 'http://localhost:8081/api/patients';
  private patientsSubject = new BehaviorSubject<Patient[]>([]);
  patients$ = this.patientsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPatients();
  }

  loadPatients() {
    this.http.get<Patient[]>(this.baseUrl)
      .subscribe(patients => this.patientsSubject.next(patients));
  }

  addPatient(patient: Omit<Patient, 'id'>): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient)
      .pipe(tap(newPatient => {
        this.patientsSubject.next([...this.patientsSubject.value, newPatient]);
      }));
  }

  getPatients(): Observable<Patient[]> {
    return this.patients$;
  }
}

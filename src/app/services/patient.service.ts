import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../model/model/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [];
  private patientsSubject = new BehaviorSubject<Patient[]>([]);
  patients$ = this.patientsSubject.asObservable();

  private nextId = 1;

  addPatient(patient: Omit<Patient, 'id'>) {
    const newPatient: Patient = { id: this.nextId++, ...patient };
    this.patients.push(newPatient);
    this.patientsSubject.next([...this.patients]);
    return newPatient;
  }

  getPatients() {
    return [...this.patients];
  }
}

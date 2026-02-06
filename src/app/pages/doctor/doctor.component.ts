import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Patient } from '../../model/model/patient.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  newPatient: Omit<Patient, 'id'> = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    diagnosis: '',
    note: '',
  };

  message: string = '';

  constructor(private patientService: PatientService) {}

  addPatient() {
    if (!this.newPatient.firstName || !this.newPatient.lastName) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    this.patientService.addPatient(this.newPatient);
    this.message = `Patient ${this.newPatient.firstName} ${this.newPatient.lastName} has been added!`;

    // Reset form
    this.newPatient = { firstName: '', lastName: '', age: 0, gender: '', diagnosis: '' , note: '' };
  }
}

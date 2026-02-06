import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { Patient } from '../../model/model/patient.model';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {
    this.patients = this.patientService.getPatients();
    this.patientService.patients$.subscribe(data => {
      this.patients = data;
    });
  }
}

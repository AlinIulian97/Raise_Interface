import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Patient } from '../../model/model/patient.model';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  searchTerm: string = '';


  
  constructor(private patientService: PatientService, ) {
    this.patientService.patients$.subscribe(data => {
      this.patients = data;
      this.filterPatients();
    });
  }

  filterPatients() {
    const term = this.searchTerm.toLowerCase();

    this.filteredPatients = this.patients.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(term)
    );
  }
}


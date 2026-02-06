import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
    { path: '', component: DashboardComponent },
     { path: 'movements', component: MovementsComponent },
       { path: 'patient', component: PatientComponent },
        { path: 'doctor', component: DoctorComponent },
];

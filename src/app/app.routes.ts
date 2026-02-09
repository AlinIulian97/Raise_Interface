import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PatientComponent } from './pages/patient/patient.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },   // Pagina principală
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'movements', component: MovementsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' } // orice rută greșită -> HomeComponent
];

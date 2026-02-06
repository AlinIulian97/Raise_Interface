import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RobotsComponent } from './pages/robots/robots.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MovementsComponent } from './pages/movements/movements.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
       { path: 'robots', component: RobotsComponent },
  { path: 'settings', component: SettingsComponent },
    { path: '', component: DashboardComponent },
     { path: 'movements', component: MovementsComponent },
     
];

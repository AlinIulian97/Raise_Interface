import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     NavbarComponent,
      NavbarComponent,
       RouterModule,
        MatIconModule,
         FormsModule,
          MatSliderModule,
          MatInputModule,
          MatButtonModule,
          
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RaiseInterface';
}

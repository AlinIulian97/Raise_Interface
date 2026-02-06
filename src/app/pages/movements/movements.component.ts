import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movements',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  
selectedMovement: string = 'knee-flexion';

  movements = [
    'knee-flexion',
    'knee-extension',
    'hip-flexion',
    'ankle-dorsi',
    'ankle-plantar'
  ];
    // Formulare dinamice
  forms: { [key: string]: FormGroup } = {};

  rangeForm = new FormGroup({
    range: new FormControl(50),
    reps: new FormControl(10)
  });

  currentRange = 50;

  ngOnInit() {
     // Initializează câte un FormGroup pentru fiecare mișcare
    this.movements.forEach(m => {
      this.forms[m] = new FormGroup({
        range: new FormControl(50),
        reps: new FormControl(10)
      });

      // Abonare pentru update live a sliderului (opțional)
      this.forms[m].get('range')!.valueChanges.subscribe(value => {
        // Poți folosi dacă vrei să afișezi currentRange
      });
    });
  }

  selectMovement(movement: string) {
    this.selectedMovement = movement;
  }

  saveMovement() {
    console.log('Movement:', this.selectedMovement);
    console.log(this.forms[this.selectedMovement].value);
  }

}

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
    ReactiveFormsModule,   // trebuie înainte de Material modules
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {

  rangeForm = new FormGroup({
    range: new FormControl(50),  // valoare default
    reps: new FormControl(10)     // valoare default
  });

  currentRange: number = 50;

  ngOnInit() {
    this.rangeForm.get('range')?.valueChanges.subscribe(value => {
      this.currentRange = value ?? 0;
    });
  }

  saveMovement() {
    console.log('Range:', this.rangeForm.value.range);
    console.log('Reps:', this.rangeForm.value.reps);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

type MotorKey = 'Motor 1' | 'Motor 2' | 'Motor 3' | 'Motor 4' | 'Motor 5';

interface MotorSettings {
  velocity: number;
  acceleration: number;
  deceleration: number;
  ogVelocity: number;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  motors: MotorKey[] = [
    'Motor 1',
    'Motor 2',
    'Motor 3',
    'Motor 4',
    'Motor 5'
  ];

  selectedMotor!: MotorKey;

  motorSettings: Record<MotorKey, MotorSettings> = {
    'Motor 1': { velocity: 1000, acceleration: 1000, deceleration: 1000, ogVelocity: 500 },
    'Motor 2': { velocity: 1000, acceleration: 1000, deceleration: 1000, ogVelocity: 500 },
    'Motor 3': { velocity: 1000, acceleration: 1000, deceleration: 1000, ogVelocity: 500 },
    'Motor 4': { velocity: 1000, acceleration: 1000, deceleration: 1000, ogVelocity: 500 },
    'Motor 5': { velocity: 1000, acceleration: 1000, deceleration: 1000, ogVelocity: 500 }
  };

  selectMotor(motor: MotorKey) {
    this.selectedMotor = motor;
  }

  updateSettings() {
    const settings = this.motorSettings[this.selectedMotor];
    console.log('UPDATE PLC:', this.selectedMotor, settings);
    alert(`Settings updated for ${this.selectedMotor}`);
  }
}

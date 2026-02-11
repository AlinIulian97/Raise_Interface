import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MotorSetting, MotorSettingService } from '../../services/motor-setting.service';


type MotorKey = 'Motor 1' | 'Motor 2' | 'Motor 3' | 'Motor 4' | 'Motor 5';

interface MotorSettings {
  velocity: number;
  acceleration: number;
  deceleration: number;
  jogVelocity: number;
    maxSpeed: number;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSliderModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  motors: MotorKey[] = ['Motor 1', 'Motor 2', 'Motor 3', 'Motor 4', 'Motor 5'];
  selectedMotor!: MotorKey;

  motorSettings: Record<MotorKey, MotorSettings> = {
    'Motor 1': { velocity: 1000, acceleration: 1000, deceleration: 1000, jogVelocity: 500 , maxSpeed : 20 },
    'Motor 2': { velocity: 1000, acceleration: 1000, deceleration: 1000, jogVelocity: 500, maxSpeed : 20 },
    'Motor 3': { velocity: 1000, acceleration: 1000, deceleration: 1000, jogVelocity: 500 , maxSpeed : 20},
    'Motor 4': { velocity: 1000, acceleration: 1000, deceleration: 1000, jogVelocity: 500 , maxSpeed : 20},
    'Motor 5': { velocity: 1000, acceleration: 1000, deceleration: 1000, jogVelocity: 500, maxSpeed : 20 }
  };

  constructor(private motorSettingService: MotorSettingService) {}

  ngOnInit() {
    // La pornire, preia setările din backend
    this.motorSettingService.getAll().subscribe(data => {
      data.forEach(d => {
        if (this.motors.includes(d.motorName as MotorKey)) {
          this.motorSettings[d.motorName as MotorKey] = {
            velocity: d.velocity,
            acceleration: d.acceleration,
            deceleration: d.deceleration,
            jogVelocity: d.jogVelocity,
            maxSpeed: d.maxSpeed
          };
        }
      });
    });
  }

  selectMotor(motor: MotorKey) {
    this.selectedMotor = motor;
  }

  updateSettings() {
    const settings = this.motorSettings[this.selectedMotor];
    const dto: MotorSetting = {
      motorName: this.selectedMotor,
      velocity: settings.velocity,
      acceleration: settings.acceleration,
      deceleration: settings.deceleration,
      jogVelocity: settings.jogVelocity,
        maxSpeed: settings.maxSpeed
    };

    this.motorSettingService.update(this.selectedMotor, dto).subscribe({
      next: () => alert(`Settings updated for ${this.selectedMotor}`),
      error: err => alert(`Error updating motor: ${err.message}`)
    });
  }

  testMotor(motor: MotorKey) {
  const settings = this.motorSettings[motor];
  // Aici poți apela serviciul Angular sau să faci orice acțiune
  alert(`Testing ${motor} with settings:\nVelocity: ${settings.velocity}\nAcceleration: ${settings.acceleration}`);
}}

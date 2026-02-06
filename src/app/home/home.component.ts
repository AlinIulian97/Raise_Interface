import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // Login form
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('patient', Validators.required) // select: patient / doctor
  });

  // Create account form
  createForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  // Toggle between login and create account
  showCreateForm = false;

  toggleForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      // aici poți adăuga autentificare reală
    }
  }

  createAccount() {
    if (this.createForm.valid) {
      console.log('Create account data:', this.createForm.value);
      // aici poți adăuga creare cont real
    }
  }
}

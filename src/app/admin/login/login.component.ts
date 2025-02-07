import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  userFound: boolean = true;  // Track if user is found
  submitted: boolean = false;  // Track if form has been submitted

  // Mock list of users (In a real app, you'd fetch this from a backend)
  users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'securePass456' },
    { email: 'user3@example.com', password: '1234abcd' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email validation
      password: ['', [Validators.required, Validators.minLength(6)]]  // Password validation
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    this.submitted = true;  // Mark the form as submitted

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Check if user exists in the array
      const user = this.users.find(u => u.email === email && u.password === password);

      if (user) {
        console.log('Login Successful');
        this.userFound = true;
        // You can proceed to redirect the user or perform other actions
      } else {
        console.log('Invalid email or password');
        this.userFound = false;
      }
    } else {
      console.log('Form is invalid');
      this.userFound = true; // Reset userFound if form is invalid
    }
  }
}

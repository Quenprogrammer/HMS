import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-upload-doctors',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './upload-doctors.component.html',
  styleUrl: './upload-doctors.component.scss'
})
export class UploadDoctorsComponent {
  doctorForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with validation
    this.doctorForm = this.fb.group({
      id: [this.generateRandomId(), [Validators.required]],  // Generate a random ID when the form is initialized
      name: ['', [Validators.required, Validators.minLength(3)]], // Name field with validation
      specialty: ['', [Validators.required]], // Specialty field with validation
      biography: ['', [Validators.required]], // Biography field with validation
      contacts: this.fb.group({
        facebook: ['', [Validators.pattern('https?://.*')]], // Valid URL for Facebook
        linkedin: ['', [Validators.pattern('https?://.*')]], // Valid URL for LinkedIn
        gmail: ['', [Validators.email]] // Valid email format for Gmail
      })
    });
  }

  // Random ID generation function within the specified range
  generateRandomId(): number {
    const min = 553663;
    const max = 999663;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.doctorForm.valid) {
      console.log('Form Submitted', this.doctorForm.value);
      // You can send this form data to your backend server for further processing
    } else {
      console.log('Form is invalid');
    }
  }
}

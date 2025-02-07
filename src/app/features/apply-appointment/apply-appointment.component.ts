import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HospitalTagComponent} from "../../core/components/hospital-tag/hospital-tag.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-apply-appointment',
  standalone: true,
  imports: [
    RouterLink,
    HospitalTagComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './apply-appointment.component.html',
  styleUrl: './apply-appointment.component.scss'
})
export class ApplyAppointmentComponent {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with name, date, and message fields
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const formValues = this.appointmentForm.value;

      // Get the current date (formatted as needed)
      const currentDate = new Date().toISOString().split('T')[0]; // Format to YYYY-MM-DD

      // Include current date in the form data for submission
      const submissionData = {
        ...formValues,
        currentDate // Add current date to the submission data
      };

      console.log('Form Submitted', submissionData);

      // Handle the form submission logic, e.g., sending data to the backend
    } else {
      console.log('Form is invalid');
    }
  }
}

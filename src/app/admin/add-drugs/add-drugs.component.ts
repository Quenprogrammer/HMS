import { Component, OnInit } from '@angular/core';
import {drugs} from "../../siteContent/drugs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-drugs',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-drugs.component.html',
  styleUrl: './add-drugs.component.scss'
})
export class AddDrugsComponent  implements OnInit{
  drugForm!: FormGroup;
  imagePreview: string | null = null; // For displaying the uploaded image preview

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with validation
    this.drugForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name field with validation
      use: ['', [Validators.required]], // Use field with validation
      price: ['', [Validators.required, Validators.min(0)]], // Price field with validation
      info: ['', [Validators.required]], // Info field with validation
      image: [null, [Validators.required]] // Image field with validation
    });
  }

  // Handle image file change and show preview
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.drugForm.valid) {
      console.log('Form Submitted', this.drugForm.value);
      // You can send this form data to your backend server for further processing
    } else {
      console.log('Form is invalid');
    }
  }

}

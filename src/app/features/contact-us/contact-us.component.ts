import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {contactDetails} from "../../siteContent/contactUs";
import {socialAccount} from "../../siteContent/aboutUS";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  get formControls() {
    return this.contactForm.controls;
  }

  protected readonly contactDetails = contactDetails;
  protected readonly Array = Array;

  isGreenCard(index: number): boolean {
    return index === 0 || index === 2;
  }

  protected readonly socialAccount = socialAccount;
}

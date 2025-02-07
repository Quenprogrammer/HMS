import { Component } from '@angular/core';
import {doctors } from "../../siteContent/doctors";
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HospitalTagComponent} from "../../core/components/hospital-tag/hospital-tag.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    TruncateTextPipe,
    NgForOf,
    FormsModule,
    HospitalTagComponent,
    RouterLink
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  // Holds the original list of doctors
  protected readonly doctors = doctors;

  // Stores the search term
  searchTerm: string = '';

  // Stores the selected search criterion (Name, Specialty, or ID)
  searchBy: string = 'name'; // Default to search by name

  // Stores the filtered list of doctors
  filteredDoctors = [...this.doctors];

  // Function to filter doctors based on the search term and selected search criterion
  filterDoctors() {
    if (this.searchTerm.trim() === '') {
      this.filteredDoctors = [...this.doctors];  // Reset to all doctors if search is empty
    } else {
      this.filteredDoctors = this.doctors.filter(doctor => {
        switch (this.searchBy) {
          case 'name':
            return doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase());
          case 'specialty':
            return doctor.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
          case 'id':
            // Convert ID to string before using toLowerCase()
            return String(doctor.id).toLowerCase().includes(this.searchTerm.toLowerCase());
          default:
            return false;
        }
      });
    }
  }
}

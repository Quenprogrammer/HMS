import { Component } from '@angular/core';
import {drugs} from "../../siteContent/drugs";
import {ModalComponent} from "../../core/modal";
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    ModalComponent,
    TruncateTextPipe,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  protected readonly drugs = drugs;
  searchTerm: string = '';

  // Stores the selected search criterion (Name, Specialty, or ID)
  searchBy: string = 'name'; // Default to search by name

  // Stores the filtered list of drugs
  filteredDoctors = [...this.drugs];

  // Function to filter drugs based on the search term and selected search criterion
  filterDoctors() {
    if (this.searchTerm.trim() === '') {
      this.filteredDoctors = [...this.drugs];  // Reset to all drugs if search is empty
    } else {
      this.filteredDoctors = this.drugs.filter(doctor => {
        switch (this.searchBy) {
          case 'name':
            return doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase());
          case 'price':
            return doctor.price.toLowerCase().includes(this.searchTerm.toLowerCase());
          case 'id':
            // Convert ID to string before using toLowerCase()
            return String(doctor.name).toLowerCase().includes(this.searchTerm.toLowerCase());
          default:
            return false;
        }
      });
    }
  }











  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}

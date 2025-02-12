import { Component } from '@angular/core';
import {HospitalTagComponent} from "../../../core/components/hospital-tag/hospital-tag.component";
import {servicePrices} from "../../../siteContent/pricing";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    HospitalTagComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  // Original list of services
  protected readonly servicePrices = servicePrices;

  // The search term entered by the user
  searchTerm: string = '';

  // The search criteria selected by the user
  searchBy: string = 'service';  // Default to 'service'

  // Filtered list based on the search term and search criteria
  filteredServices = this.servicePrices;

  // Method to handle the filtering based on selected criteria
  filterServices() {
    this.filteredServices = this.servicePrices.filter(service => {
      const term = this.searchTerm.toLowerCase();
      if (this.searchBy === 'service') {
        return service.service.toLowerCase().includes(term);
      } else if (this.searchBy === 'description') {
        return service.description.toLowerCase().includes(term);
      } else if (this.searchBy === 'priceRange') {
        return service.priceRange.toLowerCase().includes(term);
      }
      return false;
    });
  }

  // Track function for optimizing rendering
  trackByService(index: number, service: any) {
    return service.service;  // Using service name as a unique identifier
  }
}

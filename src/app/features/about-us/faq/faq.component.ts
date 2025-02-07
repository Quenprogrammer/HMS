import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {faqData} from "../../../siteContent/FAQ";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {

  protected readonly faqData = faqData;
}

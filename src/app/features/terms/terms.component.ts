import { Component } from '@angular/core';
import {HospitalTagComponent} from "../../core/components/hospital-tag/hospital-tag.component";
import {generalWebsiteTerms} from "../../siteContent/terms";
import {NewsPipePipe} from "../../shared/news-pipe.pipe";
@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    HospitalTagComponent,
    NewsPipePipe
  ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {

  protected readonly generalWebsiteTerms = generalWebsiteTerms;
}

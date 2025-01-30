import { Component } from '@angular/core';
import {AboutHeading, HeroAboutUsContent, tagLineHeading} from "../../siteContent/aboutUS";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly AboutHeading = AboutHeading;
  protected readonly tagLineHeading = tagLineHeading;
  protected readonly HeroAboutUsContent = HeroAboutUsContent;
}

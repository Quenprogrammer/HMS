import { Component } from '@angular/core';
import {
  AboutHeading,
  aboutUsContent,
  HeroAboutUsContent,
  tagLineHeading,
  whyChooseUsContent, whyWeAreTheBest
} from "../../siteContent/aboutUS";
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";
import {CallToActionComponent} from "./call-to-action/call-to-action.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    TruncateTextPipe,
    CallToActionComponent,
    RouterLink
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly AboutHeading = AboutHeading;
  protected readonly tagLineHeading = tagLineHeading;
  protected readonly HeroAboutUsContent = HeroAboutUsContent;

  protected readonly aboutUsContent = aboutUsContent;
  protected readonly whyChooseUsContent = whyChooseUsContent;
  protected readonly whyWeAreTheBest = whyWeAreTheBest;
}

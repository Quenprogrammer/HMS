import { Component } from '@angular/core';
import {NewsCardComponent} from "../news/news-card/news-card.component";
import {News} from "../news/news";
import {heading1, heading1Tagline, heading2, whoWeAre} from "../../siteContent/homePage";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NewsCardComponent,
    NgForOf
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  protected readonly News = News.slice(0,3);
  protected readonly heading1 = heading1;
  protected readonly heading1Tagline = heading1Tagline;
  protected readonly heading2 = heading2;
  protected readonly whoWeAre = whoWeAre;
}

import {Component, signal} from '@angular/core';
import{News,} from"./news"
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";
import {NewsCardComponent} from "./news-card/news-card.component";
import {NewsLoadingCardComponent} from "./news-loading-card/news-loading-card.component";
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TruncateTextPipe,
    NewsCardComponent,
    NewsLoadingCardComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  protected readonly News = News;
  isLoading = signal(true);

  constructor() {
    setTimeout(() =>{
      this.isLoading.set(false);
    },2000);
  }
}

import { Component } from '@angular/core';
import {TruncateTextPipe} from "../../../shared/truncate-text-pipe/truncate-text.pipe";
import {News} from "../news";

@Component({
  selector: 'app-news-loading-card',
  standalone: true,
    imports: [
        TruncateTextPipe
    ],
  templateUrl: './news-loading-card.component.html',
  styleUrl: './news-loading-card.component.scss'
})
export class NewsLoadingCardComponent {

  protected readonly News = News;
}

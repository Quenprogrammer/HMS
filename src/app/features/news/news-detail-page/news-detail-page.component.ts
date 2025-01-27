import {Component, inject, Input} from '@angular/core';
import {Article} from "../news";
import {Router} from "@angular/router";
import {findArticleByTitle} from "../news";

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './news-detail-page.component.html',
  styleUrl: './news-detail-page.component.scss'
})
export class NewsDetailPageComponent {
  news: Article | null = null;
  isLoading: boolean = true;
  router = inject(Router);

  @Input()
  set id(articleId: string) {
    const article = findArticleByTitle(articleId);
    if (article) {
      this.news = article;
      this.isLoading = false;
    } else {
      this.router.navigateByUrl('/notfound');
    }
  }
}

import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: 'news', loadComponent: () => import('./features/news/news.component').then(_ => _.NewsComponent) },
  { path: 'news-details/:id', loadComponent: () => import('./features/news/news-detail-page/news-detail-page.component').then(_ => _.NewsDetailPageComponent) },

];

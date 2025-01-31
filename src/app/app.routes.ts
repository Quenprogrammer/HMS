import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'homepage', loadComponent: () => import('./features/homepage/homepage.component').then(_ => _.HomepageComponent) },
  { path: 'book-appointment', loadComponent: () => import('./features/apply-appointment/apply-appointment.component').then(_ => _.ApplyAppointmentComponent) },
  { path: 'news', loadComponent: () => import('./features/news/news.component').then(_ => _.NewsComponent) },
  { path: 'aboutUs', loadComponent: () => import('./features/about-us/about-us.component').then(_ => _.AboutUsComponent) },
  { path: 'doctors', loadComponent: () => import('./features/doctors/doctors.component').then(_ => _.DoctorsComponent) },
  { path: 'contactUs', loadComponent: () => import('./features/contact-us/contact-us.component').then(_ => _.ContactUsComponent) },
  { path: 'services', loadComponent: () => import('./features/services/services.component').then(_ => _.ServicesComponent) },
   { path: 'news-details/:id', loadComponent: () => import('./features/news/news-detail-page/news-detail-page.component').then(_ => _.NewsDetailPageComponent) },

];

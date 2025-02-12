import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/homepage/homepage.component').then(_ => _.HomepageComponent) },
  { path: 'book-appointment', loadComponent: () => import('./features/apply-appointment/apply-appointment.component').then(_ => _.ApplyAppointmentComponent) },
  { path: 'admin', loadComponent: () => import('./admin/admin-home-page/admin-home-page.component').then(_ => _.AdminHomePageComponent) },
  { path: 'news', loadComponent: () => import('./features/news/news.component').then(_ => _.NewsComponent) },
  { path: 'more', loadComponent: () => import('./features/more/more.component').then(_ => _.MoreComponent) },
  { path: 'aboutUs', loadComponent: () => import('./features/about-us/about-us.component').then(_ => _.AboutUsComponent) },
/*  { path: 'FAQ', loadComponent: () => import('./features/about-us/faq/faq.component.ts').then(_ => _.FaqComponent) },*/
  { path: 'doctors', loadComponent: () => import('./features/doctors/doctors.component').then(_ => _.DoctorsComponent) },
  { path: 'store', loadComponent: () => import('./features/store/store.component').then(_ => _.StoreComponent) },
  { path: 'contactUs', loadComponent: () => import('./features/contact-us/contact-us.component').then(_ => _.ContactUsComponent) },
  { path: 'signUp', loadComponent: () => import('./features/signup/signup.component').then(_ => _.SignupComponent) },
  { path: 'services', loadComponent: () => import('./features/services/services.component').then(_ => _.ServicesComponent) },
   { path: 'news-details/:id', loadComponent: () => import('./features/news/news-detail-page/news-detail-page.component').then(_ => _.NewsDetailPageComponent) },
   { path: 'admin-menu', loadComponent: () => import('./admin/admin-auth/admin-auth.component').then(_ => _.AdminAuthComponent) },

  {
    path: 'faq',
    loadComponent: () => import('./features/about-us/faq/faq.component').then(_ => _.FAQComponent)
  },
  {
    path: 'help-center',
    loadComponent: () => import('./features/about-us/help-center/help-center.component').then(_ => _.HelpCenterComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./features/about-us/pricing/pricing.component').then(_ => _.PricingComponent)
  },
  {
    path: 'site-map',
    loadComponent: () => import('./features/about-us/site-map/site-map.component').then(_ => _.SiteMapComponent)
  },



  { path: 'messages', loadComponent: () => import('./admin/messages/messages.component').then(_ => _.MessagesComponent) },
  { path: 'doctorsData', loadComponent: () => import('./admin/upload-doctors/upload-doctors.component').then(_ => _.UploadDoctorsComponent) },
  { path: 'blogData', loadComponent: () => import('./admin/blog/blog.component').then(_ => _.BlogComponent) },
  { path: 'drugsData', loadComponent: () => import('./admin/add-drugs/add-drugs.component').then(_ => _.AddDrugsComponent) },
  { path: 'database', loadComponent: () => import('./admin/database/database.component').then(_ => _.DATABASEComponent) },
  { path: 'schedulesData', loadComponent: () => import('./admin/schedules/schedules.component').then(_ => _.SchedulesComponent) },
  { path: 'users', loadComponent: () => import('./admin/users/users.component').then(_ => _.UsersComponent) },
  { path: 'login', loadComponent: () => import('./admin/login/login.component').then(_ => _.LoginComponent) },
  { path: 'storeData', loadComponent: () => import('./admin/store-data/store-data.component').then(_ => _.StoreDataComponent) },
  { path: 'uploadNews', loadComponent: () => import('./admin/upload-news/upload-news.component').then(_ => _.UploadNewsComponent) },
  { path: 'pricingData', loadComponent: () => import('./admin/store-data/store-data.component').then(_ => _.StoreDataComponent) },
  { path: 'category/:category', loadComponent: () => import('./fortuneProducts/catgory/catgory.component').then(_ => _.CatgoryComponent) },

];

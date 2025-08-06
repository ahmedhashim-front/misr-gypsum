import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/aboutus/aboutus.component').then(
        (m) => m.AboutusComponent
      ),
  },
  {
    path: 'projects', // بدل project -> projects عشان تتوافق مع الناف بار
    loadComponent: () =>
      import('./pages/project/project.component').then(
        (m) => m.ProjectComponent
      ),
  },
  {
    path: 'productdetailes',
    loadComponent: () =>
      import('./pages/productdetailes/productdetailes.component').then(
        (m) => m.ProductdetailesComponent
      ),
  },
  {
    path: 'services', // بدل companies -> services عشان تتوافق مع الناف بار
    loadComponent: () =>
      import('./pages/services/services.component').then(
        // لو ممكن تغير اسم المجلد من compnies لـ services أفضل
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'contact', // بدل contactus -> contact عشان تتوافق مع الناف بار
    loadComponent: () =>
      import('./pages/contactus/contactus.component').then(
        (m) => m.ContactusComponent
      ),
  },

  {
    path: 'projectdetailes',
    loadComponent: () =>
      import('./pages/projectdetailes/projectdetailes.component').then(
        (m) => m.ProjectdetailesComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },

  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },
];

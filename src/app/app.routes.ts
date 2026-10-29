import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  {
    path: 'catalogue',
    loadComponent: () =>
      import('@presentation/pages/catalogue-page/catalogue-page').then((m) => m.CataloguePage),
  },
  {
    path: 'panier',
    loadComponent: () =>
      import('@presentation/pages/cart-page/cart-page').then((m) => m.CartPage),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('@presentation/pages/customers-page/customers-page').then((m) => m.CustomersPage),
  },
];

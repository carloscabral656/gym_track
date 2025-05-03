import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/user-registration/user-registration.component').then(
        (m) => m.UserRegistrationComponent
      ),
  },
];

import { Routes } from '@angular/router';

export const userRegistrationRoutes: Routes = [
  {
    path: 'user-registration',
    loadComponent: () =>
      import('./pages/user-registration/user-registration.component').then(
        (m) => m.UserRegistrationComponent
      ),
  },
];

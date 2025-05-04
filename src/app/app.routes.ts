import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { userRegistrationRoutes } from './features/user-registration/user-registration.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'registration',
    children: userRegistrationRoutes,
  },
];

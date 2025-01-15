import { Routes } from '@angular/router';
import { GuardService } from './core/services/guard/guard.service';
import { UserRoles } from './core/Entities/Constants/UserRoles.enum';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [GuardService],
    data: { roles: ['admin'] },
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [GuardService],
    data: { roles: [ UserRoles.Guest ] },
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [GuardService],
    data: { roles: ['user', 'admin'] },
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'bookings',
    loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.BookingsModule),
    canActivate: [GuardService],
    data: { roles: ['user', 'admin'] },
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./modules/vehicles/vehicles.module').then(m => m.VehiclesModule),
    canActivate: [GuardService],
    data: { roles: [ UserRoles.Admin, UserRoles.Guest, UserRoles.Renter, UserRoles.Support ] },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

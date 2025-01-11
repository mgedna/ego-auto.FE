import { Routes } from '@angular/router';
import { GuardService } from './core/services/guard/guard.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [GuardService],
    data: { roles: ['admin'] },
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [GuardService],
    data: { roles: ['user', 'admin'] },
  },
];

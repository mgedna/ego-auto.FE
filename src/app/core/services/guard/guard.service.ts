import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserRoles } from '../../Entities/Constants/UserRoles.enum';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = UserRoles.Guest;
    const allowedRoles = route.data['roles'] as Array<UserRoles>;

    if (allowedRoles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/unauthorized']);

    return false;
  }
}

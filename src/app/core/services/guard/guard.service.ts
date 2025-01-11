import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class GuardService {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = "dummyRole";
    const allowedRoles = route.data['roles'] as Array<string>;

    if (allowedRoles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/unauthorized']);

    return false;
  }
}

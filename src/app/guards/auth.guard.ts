import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {LOGIN_NEEDED} from "../constants/auth.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private auth: AuthService,
      private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url = route.url[0].path;
    const notAllowedRoutes = ['need', 'volunteer', 'logistic-aid', 'user-needs', 'donate'];

    if (!this.auth.isLoggedIn() && notAllowedRoutes.includes(url)) {
      this.router.navigate(['login'], { queryParams: { target: url } });
      return false;
    }

    if (this.auth.isLoggedIn() && (url === 'login' || url === 'register')) {
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }

  
  
}

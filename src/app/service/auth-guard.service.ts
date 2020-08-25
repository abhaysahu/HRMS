import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { data } from 'jquery';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    const roles = route.data.roles
    console.log(state.url)
    console.log(roles)
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {   
      console.log(this.authService.isLoggedIn)
    return true; }

    // To redirect to the page user is after login
    this.authService.redirectUrl = url;
    // move to login page
    this.router.navigate(['/login']);
    return false;
  }
}
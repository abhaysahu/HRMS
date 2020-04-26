import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private router: Router) { }


  canActivate(route, state: RouterStateSnapshot)
  {

    let userId = localStorage.getItem('pobara_user_id');
    

    if(userId)
    {
      console.log(userId);
      return true;
    } 

    this.router.navigate(['/login'])
    return false;


  }


}

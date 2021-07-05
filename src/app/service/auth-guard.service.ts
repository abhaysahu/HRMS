import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { data } from 'jquery';
import { Role } from '../models/role';
import { CustomToastrService } from './customToastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private customToastrService: CustomToastrService
    ) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   let url: string = state.url;
  //    const roles = route.data.roles
  //    console.log(roles)
  //   console.log(state.url)
    
  //   return this.checkLogin(state.url);
  // }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) {   
  //     console.log(this.authService.isLoggedIn)
  //   return true; }

  //   this.authService.redirectUrl = url;
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.isLoggedIn;
    const Roles= this.authService.getRole()
    // console.log(Roles)
  

    if (currentUser) {
        
        // console.log(route.data.roles)
        if (route.data.roles && route.data.roles.indexOf(Roles) === -1) {
            // role not authorised so redirect to home page
            // console.log("abaha")
            

            this.customToastrService.GetInfoToastr("You do not have rights to open this!!!", "Auth Status", 3000)

            setTimeout(()=>
            {
              this.router.navigate(['/dashboard']);

            }, 800);
            return false;

            
        }
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}





}
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedinUser } from '../models/loggedInUser';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  redirectUrl: string;
  loginStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  login(params): Observable<LoggedinUser> {
    var data = `grant_type=password&username=${params.userName}&password=${params.password}`;
    return this.httpClient.post<LoggedinUser>(`${environment.webapiUrl}token`, data);
  }


  public refreshToken() {
    /* Leave it for next article because I want to cover 
     * it in more detail and different scenarios which 
     * we need for real project */
  }
  public getUserDetail() {     
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user'));
    } else {
      return null;
    }
  }

  public get isLoggedIn() { return !!sessionStorage.getItem('token'); }  

  public get getToken() { return sessionStorage.getItem('token'); }

  public get getRefreshToken() { return sessionStorage.getItem('refresh'); }


  public manageSession(data: LoggedinUser) {
    sessionStorage.setItem('token', data.access_token);
    sessionStorage.setItem('refresh', data.refresh_token);
    sessionStorage.setItem('user', JSON.stringify(data));

  }

  
  public logout(): void {
    this.redirectUrl = document.location.pathname;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refresh');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.loginStatus.emit(false);
  }




}

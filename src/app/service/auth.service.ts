import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.httpClient.post<LoggedinUser>(environment.webapiUrl + 'token', data);
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

  getRole()
  {
    return sessionStorage.getItem('role')
  }


  public manageSession(data: LoggedinUser) {
    sessionStorage.setItem('token', data.access_token);
    sessionStorage.setItem('refresh', data.refresh_token);
    sessionStorage.setItem('user', JSON.stringify(data));

    console.log(data.Id)
    


    if(data.Id=="72fecddb-fcfa-4afb-a8ec-7c0a3839e7c5")
    {
      sessionStorage.setItem('role',"Admin");
    }
    else if(data.Id=="eca650a6-25fe-45a0-a9a1-5934eac3d64a")
    {
      sessionStorage.setItem('role', "HR");
    }
    else if(data.Id=="b2e6392c-f944-4f17-9f48-f0a79e561397")
    {
      sessionStorage.setItem('role', "Manager");
    }
    else
    {
      sessionStorage.setItem('role', "User");
    }
    
  }
 
  
  public logout(): void {

    //this.redirectUrl = document.location.pathname;
    this.redirectUrl = this.router.url;
    // console.log(this.redirectUrl)
    
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refresh');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('role')
    
    this.router.navigate(['/login']);
    this.loginStatus.emit(false);
    
  }



  getdata(): Observable<any> {

    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get(environment.webapiUrl+'api/user/72fecddb-fcfa-4afb-a8ec-7c0a3839e7c5', { headers: headers  })
  } 


}

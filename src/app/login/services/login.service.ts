import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  checklogin(login)
  {
 
      console.log(login)

      return this.http.post(environment.apiUrl+'/loginApi/login',login);
  }

  getuser(userID)
  {
    return this.http.get(environment.apiUrl+'/loginApi/data/'+userID);
  }

}



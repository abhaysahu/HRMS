import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmployerList } from '../models/employerList';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  
  employerDataSave(employer)
  {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/employer',employer, { headers: headers })
  } 


  getEmployerData(): Observable<EmployerList>
  {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<EmployerList>(environment.webapiUrl+'api/get/employer', { headers: headers })
  
  }



}

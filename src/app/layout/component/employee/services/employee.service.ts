import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropDown } from '../models/dropDown';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getemployee()
  {
    return this.httpClient.get('assets/emplyee_details.json');
  }


  listOfDivision(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  }
  

  listOfDepartment(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  }


  listOfDesignation(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  }
  

  listOfMaritalStatus(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  }


  listOfGender(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  }


}

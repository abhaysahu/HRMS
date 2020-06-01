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


  // allDropDownList(): Observable<DropDown>
  // {
  //   const token = sessionStorage.getItem('token')

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'authorization': `bearer ${token}`
  //   })

  //   return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/entity', { headers: headers })
  // }




  getUser(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/employee', { headers: headers })
  }


  employeeStatus(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=StatusCode&objectTypeCode=9', { headers: headers })
  }
  

  listOfDepartment(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Department&objectTypeCode=9', { headers: headers })
  }


  listOfDesignation(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Designation&objectTypeCode=9', { headers: headers })
  }
  

  listOfMaritalStatus(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=MaritalStatus&objectTypeCode=9', { headers: headers })
  }


  listOfGender(): Observable<DropDown>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Gender&objectTypeCode=9', { headers: headers })
  }


  UserDataSave(user)
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/user',user, { headers: headers })
  } 


}

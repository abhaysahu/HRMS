import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { Observable } from 'rxjs';
import { DropDown } from '../models/Dropdown';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }

  listOfDesignation(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Designation&objectTypeCode=9', { headers: headers })
  }


  listOfMaritalStatus(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=MaritalStatus&objectTypeCode=9', { headers: headers })
  }


  listOfGender(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Gender&objectTypeCode=9', { headers: headers })
  }

}

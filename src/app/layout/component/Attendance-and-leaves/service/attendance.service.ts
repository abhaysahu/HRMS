import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responses } from '../models/response';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { DropDown } from '../../employee/models/dropDown';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }

  get():Observable<any>
  {
    return this.httpClient.get<any>('assets/add-attendance.json');
  }

  getUser(): Observable<Responses>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<Responses>(environment.webapiUrl+'api/get/employee', { headers: headers })
  }


  getAttendanceByDate(date): Observable<Responses>
  {
   

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<Responses>(environment.webapiUrl+`api/get/AttendanceByDate?date=${date}`, { headers: headers })
  }


  AttendanceStatus(): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+ 'api/get/PickList?attributeName=StatusCode&objectTypeCode=11', { headers: headers })
  }
  
}

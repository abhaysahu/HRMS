import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { environment } from 'src/environments/environment';
import { Responses } from '../models/response';
import { Observable } from 'rxjs';
import { DropDown } from '../models/Dropdown';

@Injectable({
  providedIn: 'root'
})
export class ShiftTimeService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }


  shiftTimeDataSave(ShiftTime)
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/ShiftTime',ShiftTime, { headers: headers })
  }


  shiftStatus(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=StatusCode&objectTypeCode=14', { headers: headers })
  }
}

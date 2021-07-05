import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { environment } from 'src/environments/environment';
import { Responses } from '../models/response';
import { Observable } from 'rxjs';
import { DropDown } from '../models/Dropdown';
import { MyShiftList } from '../models/myshift-list';

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
  
    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/ShiftTime',ShiftTime, { headers: headers })
  }


  ApprovedByStatus(Id): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+ `api/user/manager?id=${Id}`, { headers: headers })
  }


  GetMyShiftTimeList(Id,status): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+ `api/get/ShiftTimeByEmployeeId?employeeId=${Id}&aprovingStatus=${status}`, { headers: headers })
  }


  GetAwaitingMyApprovalList(Id,status): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+ `api/get/ShiftTimeByApprovedById?employeeId=${Id}&aprovingStatus=${status}`, { headers: headers })
  }

  UpdateTimeShiftData(Data)
  {

    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'api/update/ShiftTime',Data, { headers: headers })
  }


  ShiftsStatus(): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.get<DropDown>(environment.webapiUrl+ 'api/get/PickList?attributeName=StatusCode&objectTypeCode=14', { headers: headers })
  }

}

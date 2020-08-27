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
export class ExpenseService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }


  listOfProject(): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()
    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Designation&objectTypeCode=9', { headers: headers })
  }


  listOfType(): Observable<DropDown>
  {
    
    const headers = this.errorHandlingService.getauthorization()
    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=MaritalStatus&objectTypeCode=9', { headers: headers })
  }


  listOfPaidBy(): Observable<DropDown>
  {

    const headers = this.errorHandlingService.getauthorization()
    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Gender&objectTypeCode=9', { headers: headers })
  }

  expenseClaimDataSave(Sr)
  {
  
    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'',Sr, { headers: headers })
  }

  
}

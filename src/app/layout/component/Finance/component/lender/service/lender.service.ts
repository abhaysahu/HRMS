import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
// import { Vender } from '../model/vender';
// import { VenderList } from '../model/vender-list';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { LenderList } from '../model/lender-list';
import { Lender } from '../model/lender';

@Injectable({
  providedIn: 'root'
})
export class LenderService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }

  lenderDataSave(lender)
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'',lender, { headers: headers })
  }

  getLenderData(): Observable<LenderList>
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    console.log(headers)

    return this.httpClient.get<LenderList>(environment.webapiUrl+'', { headers: headers })

  }

}

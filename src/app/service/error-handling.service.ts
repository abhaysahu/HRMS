import { Injectable } from '@angular/core';
import { CustomToastrService } from './customToastr.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  message=""

  constructor(private customToastrService: CustomToastrService,
    private httpClient: HttpClient,
    private router: Router
    ) { }


  getauthorization()
  {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return headers
  }



  errorStatus(error, status)
  {
    if(error.status === 400)
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = error.message;
        return this.customToastrService.GetErrorToastr(this.message, status, 5000)

    
      }
      else if(error.status === 401)
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
        return this.customToastrService.GetErrorToastr(this.message, status, 5000)

      }       
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = error.message;
        return this.customToastrService.GetErrorToastr(this.message, status, 5000)

      }
  }



}

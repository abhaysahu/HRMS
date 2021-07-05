import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListOfReward } from '../models/listOfReward';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class RewardSkipService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService

  ) { }



  getAllRewardSkipData(): Observable<ListOfReward>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<ListOfReward>(environment.webapiUrl+'api/get/ProductToSkipForReward', { headers: headers })
  
  }



  getrewardSkipData(search): Observable<ListOfReward>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<ListOfReward>(environment.webapiUrl+`api/search/pobaraproducts?searchKeyword=${search}`, { headers: headers })
  
  }



  upDateRewardData(Product)
  {
    // const token = sessionStorage.getItem('token')
    // console.log(Product)

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.post<any>(environment.webapiUrl+'api/update/ProductToSkipForReward',Product, { headers: headers })
  } 




  AddRewardData(Product)
  {
    const token = sessionStorage.getItem('token')
    console.log(Product)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/ProductToSkipForReward',Product, { headers: headers })
  } 


  DeleteRewardData(Product)
  {
    const token = sessionStorage.getItem('token')
    console.log(Product)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/delete/hrms',Product, { headers: headers })
  } 






}

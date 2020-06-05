import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListOfReward } from '../models/listOfReward';

@Injectable({
  providedIn: 'root'
})
export class RewardSkipService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }



  getrewardSkipData(search): Observable<ListOfReward>
  {
    const token = sessionStorage.getItem('token')

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<ListOfReward>(environment.webapiUrl+`api/search/pobaraproducts?searchKeyword=${search}`, { headers: headers })
  
  }








}

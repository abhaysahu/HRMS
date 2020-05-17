import { Injectable } from '@angular/core';
import { Popup } from '../model/popup.module';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StringMapService {

  stringMapPopup: Popup[]=[]

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }



  stringMapDataSave(entity)
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post(environment.webapiUrl+'api/add/stringmap',entity, { headers: headers })
  } 




}

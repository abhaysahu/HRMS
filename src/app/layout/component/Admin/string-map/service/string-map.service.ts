import { Injectable } from '@angular/core';
import { Popup } from '../model/popup.module';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StringMapList } from '../model/stringMapList.module';

@Injectable({
  providedIn: 'root'
})
export class StringMapService {

  stringMapPopup: Popup[]=[]

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }



  stringMapGetList(objectTypeCode): Observable<StringMapList>
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<StringMapList>(environment.webapiUrl+`api/get/StringMapByEntityGroupedByAttribute?objectTypeCode=${objectTypeCode}`, { headers: headers })

  }



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

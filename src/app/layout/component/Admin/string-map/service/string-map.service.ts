import { Injectable } from '@angular/core';
import { Popup } from '../model/popup.module';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StringMapList } from '../model/stringMapList.module';
import { DropDownList } from '../model/dropdownLIst';
import { ListOfPopup } from '../model/listOfPopup.module';

@Injectable({
  providedIn: 'root'
})
export class StringMapService {

  stringMapPopup: any[]=[]

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


  getdropdownData(): Observable<DropDownList>
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<DropDownList>(environment.webapiUrl+'api/get/entity', { headers: headers })
  
  }

  getDataOfPopup(attributeName, objectTypeCode):Observable<ListOfPopup>
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<ListOfPopup>(environment.webapiUrl+`api/get/StringMapByAttribute?attributeName=${attributeName}&objectTypeCode=${objectTypeCode}`, { headers: headers })


  }


  stringMapDataUpdate(data)
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/update/stringmap',data, { headers: headers })
  } 


  stringMapDataAdd(data)
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/stringmap',data, { headers: headers })
  } 




}

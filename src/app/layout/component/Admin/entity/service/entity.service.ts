import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }



  entityDataSave(entity)
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.post(environment.webapiUrl+'api/add/entity',entity, { headers: headers })
  } 


  getEntityData(): Observable<Entity>
  {
    const token = sessionStorage.getItem('token')

    console.log(token)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `bearer ${token}`
    })

    return this.httpClient.get<Entity>(environment.webapiUrl+'api/get/entity', { headers: headers })
  
  }

}


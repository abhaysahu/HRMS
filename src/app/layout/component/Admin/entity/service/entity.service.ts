import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entity } from '../model/entity';
import { EntityList } from '../model/entityList';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }



  entityDataSave(entity)
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.post<any>(environment.webapiUrl+'api/add/entity',entity, { headers: headers })
  }


  getEntityData(): Observable<EntityList>
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    console.log(headers)

    return this.httpClient.get<EntityList>(environment.webapiUrl+'api/get/entity', { headers: headers })

  }

}


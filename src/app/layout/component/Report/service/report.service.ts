import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { Observable } from 'rxjs';
import { StringMapList } from '../../Admin/string-map/model/stringMapList.module';
import { environment } from 'src/environments/environment';
import { GetListOfProduct } from '../Model/getListOfProduct';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private errorHandlingService: ErrorHandlingService
  ) { }



  getListOfProduct(NumberOfDay): Observable<GetListOfProduct>
  {

    const headers = this.errorHandlingService.getauthorization();

    return this.httpClient.post<GetListOfProduct>(environment.webapiUrl+`api/pobara/report/ProductUnSold?daysToLastSale=${NumberOfDay}&productName`, { headers: headers })

  }

}

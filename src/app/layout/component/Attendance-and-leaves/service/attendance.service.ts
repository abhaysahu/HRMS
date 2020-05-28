import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  get():Observable<any>
  {
    return this.httpClient.get<any>('assets/add-attendance.json');
  }
}

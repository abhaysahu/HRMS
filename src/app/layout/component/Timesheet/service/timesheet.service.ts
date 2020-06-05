import { Injectable } from '@angular/core';

import { Comments } from '../model/comment.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Timesheet } from '../model/timesheet.model';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
 
  
  comment:Comments[]=[]
  
  timesheet: Timesheet[]=[]

  constructor(private http: HttpClient) { }


  getdata()
  {
      return this.http.get(environment.apiUrl+'/timesheetApi/allData');
  }
}




import { Injectable } from '@angular/core';

import { Comments } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
 
  
  comment:Comments[]=[]

  constructor() { }
}

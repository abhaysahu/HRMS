import { Component, OnInit } from '@angular/core';
import { AwayRequest } from '../../models/away_request';

@Component({
  selector: 'app-my-time-away-requests',
  templateUrl: './my-time-away-requests.component.html',
  styleUrls: ['./my-time-away-requests.component.css']
})
export class MyTimeAwayRequestsComponent implements OnInit {
  Attendance= {} as AwayRequest


  constructor() { }

  ngOnInit() {
  }
  onSubmit(attendance) {
    console.log(attendance) 
  }
}


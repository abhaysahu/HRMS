import { Component, OnInit } from '@angular/core';
import { ApplyTimeAway } from '../../models/time_away';

@Component({
  selector: 'app-apply-time-away',
  templateUrl: './apply-time-away.component.html',
  styleUrls: ['./apply-time-away.component.css']
})
export class ApplyTimeAwayComponent implements OnInit {
  options = [
    {
        id: "Personal Leave",
        value: '1'
    },
    {
        id: "Sick Leave",
        value: '2'
    },
    {
        id: "Emergency Leave",
        value: '3'
    }];

  Attendance ={} as ApplyTimeAway;

  value: any;
  constructor() { }



  ngOnInit() {
  }
  onSubmit(attendance) {
    console.log(attendance)
  }
}

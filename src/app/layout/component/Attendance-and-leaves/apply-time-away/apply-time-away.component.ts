import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-time-away',
  templateUrl: './apply-time-away.component.html',
  styleUrls: ['./apply-time-away.component.css']
})
export class ApplyTimeAwayComponent implements OnInit {

  Attendance: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}

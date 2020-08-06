import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-new-shift-timing',
  templateUrl: './request-new-shift-timing.component.html',
  styleUrls: ['./request-new-shift-timing.component.css']
})
export class RequestNewShiftTimingComponent implements OnInit {
  MyShifts: any[] = [];


  constructor() { }

  ngOnInit() {
  }
  onSubmit(myshifts) {
    console.log(myshifts)
  }



}

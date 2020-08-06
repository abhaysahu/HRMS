import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupshift',
  templateUrl: './popupshift.component.html',
  styleUrls: ['./popupshift.component.css']
})
export class PopupshiftComponent implements OnInit {

  MyShifts: any[] = [];


  constructor() { }

  ngOnInit() {
  }
  onSubmit(myshifts) {
    console.log(myshifts)
  }

}

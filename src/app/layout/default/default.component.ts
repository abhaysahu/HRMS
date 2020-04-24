import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  siderBarOpen = true;

  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.siderBarOpen = !this.siderBarOpen;
  }

}

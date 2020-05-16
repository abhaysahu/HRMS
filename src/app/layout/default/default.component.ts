import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  siderBarOpen = true;


  ngOnInit() {
   
    window.onresize = () => {

      console.log(window.screen.width)
    if (window.screen.width <= 540)
    {
      this.siderBarOpen = false;
    }

    else
    {
      this.siderBarOpen = true;
    }

    };
 
    
  }

  sideBarToggler() {
    this.siderBarOpen = !this.siderBarOpen;
  }

}

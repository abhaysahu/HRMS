import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  siderBarOpen = true;
  status = true;


  constructor(){

    if ((window.screen.width <= 540) && (this.status))
    {
      console.log(this.status)
      this.siderBarOpen = false;
      this.status=false;
    }

    else
    {
      console.log(this.status)
      this.siderBarOpen = true;
      this.status=true
    }
    
  }


  ngOnInit() {
   
    window.onresize = () => {

      console.log(window.screen.width)
    if ((window.screen.width <= 540) && (this.status))
    {
      console.log(this.status)
      this.siderBarOpen = false;
      this.status=false;
    }

    else
    {
      console.log(this.status)
      this.siderBarOpen = true;
      this.status=true;
    }

    };
 
    
  }

  sideBarToggler() {
    this.siderBarOpen = !this.siderBarOpen;
  }

}

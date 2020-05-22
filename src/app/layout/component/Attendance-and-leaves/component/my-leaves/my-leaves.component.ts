import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.css']
})
export class MyLeavesComponent implements OnInit {
  Leaves: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(leaves) {
    console.log(leaves) 
  }
}


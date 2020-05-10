import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sr',
  templateUrl: './add-sr.component.html',
  styleUrls: ['./add-sr.component.css']
})
export class AddSRComponent implements OnInit {
  Sr: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(sr) {
    console.log(sr) 
  }
}


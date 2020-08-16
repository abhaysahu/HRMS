import { Component, OnInit } from '@angular/core';
import { AddSr } from '../../models/add_sr';

@Component({
  selector: 'app-add-sr',
  templateUrl: './add-sr.component.html',
  styleUrls: ['./add-sr.component.css']
})
export class AddSRComponent implements OnInit {
  Sr ={} as AddSr

  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(sr) {
    console.log(sr)  
  }
}


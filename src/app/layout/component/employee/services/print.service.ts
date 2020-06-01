import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }


  onDataReady() {
    console.log("onDataReady")
    setTimeout(() => {
      window.print();
      console.log("edit")
      this.router.navigate(['/dashboard/employee/details']);
    });
  }
}

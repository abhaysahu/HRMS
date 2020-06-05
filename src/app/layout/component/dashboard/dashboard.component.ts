import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { 

    // this.authService.getdata().subscribe(data => {
    //   console.log(data)
    // })
  }

  ngOnInit() {

    var date1 =  JSON.parse(sessionStorage.getItem('user')).expires
    console.log(date1)

    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,private toastr: ToastrService) { 

    // this.authService.getdata().subscribe(data => {
    //   console.log(data)
    // })
  }

  ngOnInit() {

    var date1 =  JSON.parse(sessionStorage.getItem('user')).expires
    console.log(date1)

    
  }


  showSuccess() {
    console.log("yes")
    this.toastr.success('Hello world!', 'abhay sahu', {
      progressBar: true, 
      timeOut: 5000
    });
  }

}

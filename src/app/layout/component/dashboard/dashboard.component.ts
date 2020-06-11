import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService } from 'src/app/service/customToastr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,private toastr: ToastrService, private customToastrService: CustomToastrService) { 

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

    this.customToastrService.GetErrorToastr('Hello world1  !', 'abhay sahu1', 10000);

    this.customToastrService.GetErrorToastr('Hello world1  !', 'abhay sahu2', 10000);

    this.customToastrService.GetErrorToastr('Hello world1  !', 'abhay sahu3', 10000);

    this.customToastrService.GetErrorToastr('Hello world4  !', 'abhay sahu4', 10000);

    this.customToastrService.GetErrorToastr('Hello world5  !', 'abhay sahu5', 10000);
    
  }

}

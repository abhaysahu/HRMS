import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from 'src/app/login/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinUser } from 'src/app/models/loggedInUser';
import { AuthService } from 'src/app/service/auth.service';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isTextFieldType: boolean;

  successStatus=false;
  dangerStatus=false;

  message="";

  error: string;
  grant_type = "password"
  login: any[]=[]
  



  constructor(
    private loginServices: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    
    ) {


     }

  ngOnInit() {
  }


  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;

  }


  Login(form) {

    form.grant_type = "password"
    
 
    this.authService.login(form)    
      .subscribe((data: LoggedinUser) => {
        console.log(data) 
       
          this.authService.manageSession(data);
          this.authService.loginStatus.emit(true);
          if (this.authService.redirectUrl) 
          {
            // this.dangerStatus=false;
            // this.successStatus=true;
            this.message="You are Login successfully Wait for redirect"

            this.customToastrService.GetSuccessToastr(this.message, "Login Status", 3000)

            setTimeout(()=>
            {    
              this.router.navigate([this.authService.redirectUrl]);
      
            }, 3000);  

          } 
          else 
          {  
            // this.dangerStatus=false;
            // this.successStatus=true;
            this.message="You are Login successfully Wait for redirect"

            this.customToastrService.GetSuccessToastr(this.message, "Login Status", 3000)
  
            setTimeout(()=>
            {    
              this.router.navigate(['/dashboard']);
            }, 3000); 
          }  

        },   (error: AppResponse) => {

          this.errorHandlingService.errorStatus(error,"Login Status")
              
       }
       );
  }



  closeStatus()
  {
    this.successStatus = false;
    this.dangerStatus = false;
  }


}

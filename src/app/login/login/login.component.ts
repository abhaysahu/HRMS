import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinUser } from 'src/app/models/loggedInUser';
import { AuthService } from 'src/app/service/auth.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { Login } from '../models/login';


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
  login= {} as Login;




  constructor(
    private router: Router,
    private authService: AuthService,
    private customToastrService: CustomToastrService
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

          this.authService.manageSession(data);
          this.authService.loginStatus.emit(true);
          if (this.authService.redirectUrl)
          {
            console.log(this.authService.redirectUrl)

            this.message="You are Login successfully Wait for redirect"


            this.customToastrService.GetSuccessToastr(this.message, "Login Status", 3000)

            setTimeout(()=>
            {
              this.router.navigate([this.authService.redirectUrl]);

            }, 3000);
          }
          else
          {

            this.message="You are Login successfully Wait for redirect"


            this.customToastrService.GetSuccessToastr(this.message, "Login Status", 3000)
            setTimeout(()=>
            {
              this.router.navigate(['/dashboard']);
            }, 3000);
          }

        },   (error) => {

          console.log(error)
          if(error.status === 400)
          {
            this.message = error.error.error_description;
            return this.customToastrService.GetErrorToastr(this.message, status, 3000)
          }

          else if(error.status === 401)
          {
            this.message = "Authorization has been denied for this request And You have to Login again."
            return this.customToastrService.GetErrorToastr(this.message, status, 3000)

          }
          else
          {
            this.message = error.error.message;
            return this.customToastrService.GetErrorToastr(this.message, status, 3000)

          }

       }
       );
  }



  closeStatus()
  {
    this.successStatus = false;
    this.dangerStatus = false;
  }


}

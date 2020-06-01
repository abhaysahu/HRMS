import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from 'src/app/login/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinUser } from 'src/app/models/loggedInUser';
import { AuthService } from 'src/app/service/auth.service';
import { AppResponse } from 'src/app/models/appResponse';

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
  formData: any[]=[]



  constructor(
    private loginServices: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) {


     }

  ngOnInit() {
  }


  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;

  }


  login(form) {

    form.grant_type = "password"
    
 
    this.authService.login(form)    
      .subscribe((data: LoggedinUser) => {
        console.log(data)
       
          this.authService.manageSession(data);
          this.authService.loginStatus.emit(true);
          if (this.authService.redirectUrl) 
          {
            this.dangerStatus=false;
            this.successStatus=true;
            this.message="You are Login successfully"
            setTimeout(()=>
            {    
              this.router.navigate([this.authService.redirectUrl]);
      
            }, 3000);  

          } 
          else 
          {  
            this.dangerStatus=false;
            this.successStatus=true;
            this.message="You are Login successfully"
            setTimeout(()=>
            {    
              this.router.navigate(['/dashboard']);
            }, 3000); 
          }  

        },   (error: AppResponse) => {

          console.log(error.status)
             if(error.status === 400)
             {
              this.dangerStatus=true;
              this.successStatus=false;
              this.message = "Either user name or password is incorrect!";
             }  
              else
              {
                this.dangerStatus=true;
                this.successStatus=false;
                this.message = error.message;
              }
              
       });
  }



  closeStatus()
  {
    this.successStatus = false;
    this.dangerStatus = false;
  }


}

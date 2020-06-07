import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from 'src/app/login/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinUser } from 'src/app/models/loggedInUser';
import { AuthService } from 'src/app/service/auth.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
            // this.message="You are Login successfully"
            this.toastr.success('You are Login successfully Wait for redirect', 'Login Status', {
              progressBar: true, 
              timeOut: 3000
            });
            setTimeout(()=>
            {    
              this.router.navigate([this.authService.redirectUrl]);
      
            }, 3000);  

          } 
          else 
          {  
            // this.dangerStatus=false;
            // this.successStatus=true;
            // this.message="You are Login successfully"
            this.toastr.success('You are Login successfully Wait for redirect', 'Login Status', {
              progressBar: true, 
              timeOut: 3000
            });
            
            setTimeout(()=>
            {    
              this.router.navigate(['/dashboard']);
            }, 3000); 
          }  

        },   (error: AppResponse) => {

          console.log(error.status)
             if(error.status === 400)
             {
              // this.dangerStatus=true;
              // this.successStatus=false;
              // this.message = "Either user name or password is incorrect!";
              this.toastr.error('Either Username or password is incorrect!', 'Login Status', {
                progressBar: true, 
                timeOut: 5000,
              });
              
             }  
              else
              {
                // this.dangerStatus=true;
                // this.successStatus=false;
                // this.message = error.message;
                this.toastr.error(this.message, 'Login Status', {
                  progressBar: true, 
                  timeOut: 5000
                });
              }
              
       });
  }



  closeStatus()
  {
    this.successStatus = false;
    this.dangerStatus = false;
  }


}

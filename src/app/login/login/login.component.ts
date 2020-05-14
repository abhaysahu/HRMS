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


  // login: Login[]=[]



  error: string;

  grant_type = "password"

  formData: any[]=[]



  constructor(
    private loginServices: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) {

      this.authService.getdata().subscribe(data => {
        console.log(data)
      })


     }

  ngOnInit() {
  }



  login(form) {

    form.grant_type = "password"
    

    console.log(form)

    this.authService.login(form)    
      .subscribe((data: LoggedinUser) => {
        console.log(data)
          this.authService.manageSession(data);
          this.authService.loginStatus.emit(true);
          if (this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
          } else {
            this.router.navigate(['/']);
          }        
        },   (error: AppResponse) => {
             if(error.status === 400)
             {
              this.error = "Either user name or password is incorrect!";
              console.log(this.error)
             }       
              else
                   this.error = error.message;
       });
  }







  // login(login) 
  // {

  //   this.loginServices.checklogin(login).subscribe(data => {
  //     if(data[0])                                                        
  //     {
  //       console.log(data)
  //       localStorage.setItem('pobara_user_id', data[0].uuid);             
  //       this.router.navigate(['/dashboard']);         
        
  //     }
  //   })

  // }

}

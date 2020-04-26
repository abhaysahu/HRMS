import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from 'src/app/login/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login[]=[]



  constructor(
    private loginServices: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
  }

  save(login) //this is for login or check that the username and password is right or not
  {

    this.loginServices.checklogin(login).subscribe(data => {
      if(data[0])                                                        //user is login or not 
      {
        console.log(data)
        localStorage.setItem('pobara_user_id', data[0].uuid);             //this is store the uuid of user into localStorage.
        this.router.navigate(['/dashboard']);         
        
      }
    })

  }

}

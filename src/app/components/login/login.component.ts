import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login[]=[]



  constructor(private loginServices: LoginService) { }

  ngOnInit() {
  }

  save(login)
  {
  
    this.loginServices.checklogin(login).subscribe(data => {
      console.log(data)
    })

  }

}

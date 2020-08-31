import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Role } from 'src/app/models/role';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  opened = false;
  roles;

  Admin= false;
  HR=false;
  Manager=false;
  User=false;

  constructor(private authService: AuthService) {

    this.Admin= false;
    this.HR=false;
    this.Manager=false;
    this.User=false;

    this.roles = authService.getRole()

    if(Role.Admin == authService.getRole())
    {
      this.Admin=true
    }
    if(Role.HR == authService.getRole())
    {
      this.HR=true
    }
    if(Role.Manager == authService.getRole())
    {
      this.Manager=true
    }
    if(Role.User == authService.getRole())
    {
      this.User=true
    }

    console.log(this.roles)



   }

  ngOnInit() {
  }

}

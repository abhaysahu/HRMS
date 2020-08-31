import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Role } from './models/role';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Id;

  constructor()
  {
    let user=JSON.parse(sessionStorage.getItem('user'));
    console.log(this.Id)

    if(user)
    {
      this.Id = user.Id
      console.log("yes")
      if(this.Id=="72fecddb-fcfa-4afb-a8ec-7c0a3839e7c5")
    {
      sessionStorage.setItem('role', Role.Admin);
    }
    else if(this.Id=="eca650a6-25fe-45a0-a9a1-5934eac3d64a")
    {
      sessionStorage.setItem('role', Role.HR);
    }
    else if(this.Id=="b2e6392c-f944-4f17-9f48-f0a79e561397")
    {
      sessionStorage.setItem('role', Role.Manager);
    }
    else
    {
      sessionStorage.setItem('role', Role.User);
    }
    }

  }

  title = 'HRMS';

}
 
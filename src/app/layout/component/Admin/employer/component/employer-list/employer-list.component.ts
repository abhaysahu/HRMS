import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../service/employer.service';
import { Employer } from '../../models/employer';
import { EmployerList } from '../../models/employerList';
import { AppResponse } from 'src/app/models/appResponse';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService } from 'src/app/service/customToastr.service';


@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employerList: EmployerList[]=[];

  // successStatus=false;
  // dangerStatus=false;

  message="";

  email="";

  constructor(private employerService: EmployerService, private customToastrService: CustomToastrService
    ) { 

    this.employerService.getEmployerData().subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.employerList = resp.Data
      }
      else
      {
          // this.dangerStatus=true;
          // this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employer Status", 5000)

      }
      
    },   (error: AppResponse) => {
      if(error.status === 400)
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = error.message
        this.customToastrService.GetErrorToastr(this.message, "Employer Status", 5000)

      }
      else if(error.status === 401)
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
        this.customToastrService.GetErrorToastr(this.message, "Employer Status", 5000)

      }     

      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = error.message;
        this.customToastrService.GetErrorToastr(this.message, "Employer Status", 5000)

      }
}
)


  }

  ngOnInit() {
  }

}

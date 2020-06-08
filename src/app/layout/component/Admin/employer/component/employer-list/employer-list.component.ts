import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../service/employer.service';
import { Employer } from '../../models/employer';
import { EmployerList } from '../../models/employerList';
import { AppResponse } from 'src/app/models/appResponse';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';


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

  constructor(
    private employerService: EmployerService, 
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

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

      this.errorHandlingService.errorStatus(error,"Login Status")
}
)


  }

  ngOnInit() {
  }

}

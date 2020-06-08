import { Component, OnInit } from '@angular/core';
import { Employer } from '../../models/employer';
import { EmployerService } from '../../service/employer.service';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

@Component({
  selector: 'app-employer-save',
  templateUrl: './employer-save.component.html',
  styleUrls: ['./employer-save.component.css']
})
export class EmployerSaveComponent implements OnInit {

  Employer: Employer;

  // successStatus=false;
  // dangerStatus=false;
  message="";
  id="";


  constructor(private employerService: EmployerService,
     private customToastrService: CustomToastrService,
     private errorHandlingService: ErrorHandlingService
     ) {

    this.id = JSON.parse(sessionStorage.getItem('user')).Id;

    this.Employer = {

      LegalName: null,
      TradeName: null,
      LogoPath: "",
      CreatedBy: this.id
    }


   }

  ngOnInit() {
  }

  EmployerData(employer) {

    console.log(employer)

    this.employerService.employerDataSave(employer).subscribe(resp => {
     
      if(resp.Success)
      {
        // this.successStatus=true;
        // this.dangerStatus=false;
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Employer Save Status", 5000)


        setTimeout(()=>
        {    

          // this.successStatus=false;
          // this.dangerStatus=false;

          this.Employer = {

            LegalName: "",
            TradeName: "",
            LogoPath: "",
            CreatedBy: this.id
          }
      
        }, 5000);
      }
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Employer Save Status", 5000)

      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Employer Status")

}
)
 
  }
}
 
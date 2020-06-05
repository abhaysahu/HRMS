import { Component, OnInit } from '@angular/core';
import { Employer } from '../../models/employer';
import { EmployerService } from '../../service/employer.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-employer-save',
  templateUrl: './employer-save.component.html',
  styleUrls: ['./employer-save.component.css']
})
export class EmployerSaveComponent implements OnInit {

  Employer: Employer;

  successStatus=false;
  dangerStatus=false;
  message="";
  id="";


  constructor(private employerService: EmployerService) {

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
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"

        setTimeout(()=>
        {    

          this.successStatus=false;
          this.dangerStatus=false;

          this.Employer = {

            LegalName: "",
            TradeName: "",
            LogoPath: "",
            CreatedBy: this.id
          }
      
        }, 3000);
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
      }       
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
      }
}
)
 
  }
}
 
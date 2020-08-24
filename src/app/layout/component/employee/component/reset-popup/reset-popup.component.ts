import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../../models/password.validator';
import { RegistrationService } from '../../services/registration.service';
import { AppResponse } from 'src/app/models/appResponse';
import { EmployeeService } from '../../services/employee.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';



@Component({
  selector: 'app-reset-popup',
  templateUrl: './reset-popup.component.html',
  styleUrls: ['./reset-popup.component.css']
})
export class ResetPopupComponent implements OnInit {
 Resetpopup={}

 message;


  constructor(
    private employeeService: EmployeeService,
    private errorHandlingService: ErrorHandlingService,
    private customToastrService: CustomToastrService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ResetPopupComponent>) { }

  registrationForm: FormGroup;


  ngOnInit() {
    this.registrationForm = this.fb.group({

      password: [''],
      confirmPassword: [''],
    }, {validator: PasswordValidator});


  }



  close()
  {
    this.dialogRef.close();
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  onSubmit() {
    

    this.Resetpopup={
      Id:this.data.Id,
      Password:this.registrationForm.value.password
    }

    console.log(this.Resetpopup);

    this.employeeService.UpdateThePassword(this.Resetpopup).subscribe(resp => {
      console.log(resp)
     
      if(resp.Success)
      {
        this.message="Password is Reset successfully"
        this.customToastrService.GetSuccessToastr(this.message, "Employee ResetPassword", 5000)
        this.close()
      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message,"Employee ResetPassword", 5000);
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Employer Status")
}
)
    
  }

}

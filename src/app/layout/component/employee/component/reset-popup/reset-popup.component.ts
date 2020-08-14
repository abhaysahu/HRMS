import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../../models/password.validator';
import { RegistrationService } from '../../services/registration.service';



@Component({
  selector: 'app-reset-popup',
  templateUrl: './reset-popup.component.html',
  styleUrls: ['./reset-popup.component.css']
})
export class ResetPopupComponent implements OnInit {
  Resetpopup: any[] = [];


  constructor(
    private fb: FormBuilder,
    private _registrationService: RegistrationService,
    @Inject(MAT_DIALOG_DATA) public data,
  // tslint:disable-next-line: align
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
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('success', response),
        error => console.error('error', error)
      )
  }

}

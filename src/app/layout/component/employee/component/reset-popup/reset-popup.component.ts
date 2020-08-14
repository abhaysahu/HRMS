import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../../models/password.validator';


@Component({
  selector: 'app-reset-popup',
  templateUrl: './reset-popup.component.html',
  styleUrls: ['./reset-popup.component.css']
})
export class ResetPopupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
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

}

import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../service/expense.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-expense-claim',
  templateUrl: './expense-claim.component.html',
  styleUrls: ['./expense-claim.component.css']
})
export class ExpenseClaimComponent implements OnInit {
  Expenseclaim = {} as Expense
  dropDownListOfProject:any[]=[];
  dropDownListOfType:any[]=[];
  dropDownListOfPaidBy:any[]=[];


  message;


  constructor(
    private expenseService: ExpenseService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService) { 

    this.expenseService.listOfProject().subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropDownListOfProject = resp.Data;
      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Expense Claim Status", 5000)

      }
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Expense Claim Status")
    }
  );


  this.expenseService.listOfType().subscribe(resp => {
    console.log(resp);

    if (resp.Success) {
      this.dropDownListOfType = resp.Data;
    } else {

      this.message = resp.ErrorMessage;
      this.message = resp.Message;
      this.customToastrService.GetErrorToastr(this.message, "Expense Claim Status", 5000)

    }
  }
  ,   (error: AppResponse) => {
    this.errorHandlingService.errorStatus(error,"Expense Claim Status")
  }
);



this.expenseService.listOfPaidBy().subscribe(resp => {
  console.log(resp);

  if (resp.Success) {
    this.dropDownListOfPaidBy = resp.Data;
  } else {

    this.message = resp.ErrorMessage;
    this.message = resp.Message;
    this.customToastrService.GetErrorToastr(this.message, "Expense Claim Status", 5000)

  }
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Expense Claim Status")
}
);


  }

  ngOnInit() {
  }

  SaveExpenseClaim(expenseclaim) {
    console.log(expenseclaim) 

    this.expenseService.expenseClaimDataSave(expenseclaim).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Expense Claim is Added successfully"
        this.customToastrService.GetSuccessToastr(this.message, "Expense Claim Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Expense Claim Status", 5000)
      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Expense Claim Status")
}
)
  }

}

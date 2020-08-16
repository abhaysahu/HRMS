import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-claim',
  templateUrl: './expense-claim.component.html',
  styleUrls: ['./expense-claim.component.css']
})
export class ExpenseClaimComponent implements OnInit {
  Expenseclaim = {} as Expense


  constructor() { }

  ngOnInit() {
  }
  onSubmit(expenseclaim) {
    console.log(expenseclaim) 
  }
}

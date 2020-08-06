import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login/login/login.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './layout/component/employee/component/employee-details/employee-details.component';
import { EmployeeListComponent } from './layout/component/employee/component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './layout/component/employee/component/create-employee/create-employee.component';
import { EditEmployeeComponent } from './layout/component/employee/component/edit-employee/edit-employee.component';
import { MyAttendanceComponent } from './layout/component/Attendance-and-leaves/component/my-attendance/my-attendance.component';
import { ApplyTimeAwayComponent } from './layout/component/Attendance-and-leaves/component/apply-time-away/apply-time-away.component';
import { MyTimeAwayRequestsComponent } from './layout/component/Attendance-and-leaves/component/my-time-away-requests/my-time-away-requests.component';
import { MyLeavesComponent } from './layout/component/Attendance-and-leaves/component/my-leaves/my-leaves.component';
import { MyTimesheetComponent } from './layout/component/Timesheet/component/my-timesheet/my-timesheet.component';
import { TimesheetBankComponent } from './layout/component/Timesheet/component/timesheet-bank/timesheet-bank.component';
import { MyServiceRequetsComponent } from './layout/component/Service-request/component/my-service-requets/my-service-requets.component';
import { AddSRComponent } from './layout/component/Service-request/component/add-sr/add-sr.component';
import { AddAttendanceComponent } from './layout/component/Attendance-and-leaves/component/add-attendance/add-attendance.component';
import { ExpenseClaimComponent } from './layout/component/Expense/component/expense-claim/expense-claim.component';
import { ExpenseBankComponent } from './layout/component/Expense/component/expense-bank/expense-bank.component';
import { EntityListComponent } from './layout/component/Admin/entity/component/entity-list/entity-list.component';
import { EntitySaveComponent } from './layout/component/Admin/entity/component/entity-save/entity-save.component';
import { ProjectSaveComponent } from './layout/component/Admin/project/component/project-save/project-save.component';
import { ProjectListComponent } from './layout/component/Admin/project/component/project-list/project-list.component';
import { StringMapSaveComponent } from './layout/component/Admin/string-map/component/string-map-save/string-map-save.component';
import { StringMapListComponent } from './layout/component/Admin/string-map/component/string-map-list/string-map-list.component';
import { SystemLogListComponent } from './layout/component/Admin/system-log/system-log-list/system-log-list.component';
import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';
import { EmployerListComponent } from './layout/component/Admin/employer/component/employer-list/employer-list.component';
import { EmployerSaveComponent } from './layout/component/Admin/employer/component/employer-save/employer-save.component';
import { PrintLayoutComponent } from './layout/component/employee/component/create-employee/print-layout/print-layout.component';
import { InvoiceComponent } from './layout/component/employee/component/create-employee/invoice/invoice.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RewardSkipComponent } from './layout/component/reward-skip/component/reward-skip.component';
import { MyTransactionComponent } from './layout/component/Finance/component/my-transaction/my-transaction.component';
import { TransactionComponent } from './layout/component/Finance/component/transaction/transaction.component';
import { LedgerComponent } from './layout/component/Finance/component/ledger/ledger.component';
import { LenderComponent } from './layout/component/Finance/component/lender/component/lender.component';
import { VenderComponent } from './layout/component/Finance/component/vender/component/vender-list/vender.component';
import { VenderSaveComponent } from './layout/component/Finance/component/vender/component/vender-save/vender-save.component';
import { UnsoldProductsComponent } from './layout/component/Report/components/unsold-products/unsold-products.component';
import { ReportComponent } from './layout/component/Report/components/report/report.component';
import { MyShiftsComponent } from './layout/component/Shift-Timing/my-shifts/my-shifts.component';
import { AwaitingMyApprovalComponent } from './layout/component/Shift-Timing/awaiting-my-approval/awaiting-my-approval.component';
import { RequestNewShiftTimingComponent } from './layout/component/Shift-Timing/request-new-shift-timing/request-new-shift-timing.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: 'navbar', component: NavBarComponent},


  {
    path: 'dashboard', component: DefaultComponent,
      canActivate: [AuthGuardService],

    children: [
      {
        path: '', component: DashboardComponent,
        //canActivate: [AuthGuardService]
      },
      {
        path: 'employee/details', component: EmployeeDetailsComponent,
        //canActivate: [AuthGuardService]
      },
      {
        path: 'employee/list', component: EmployeeListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'create/new/employee', component:CreateEmployeeComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'edit/employee/:id',component:EditEmployeeComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'myattendance', component: MyAttendanceComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'applytimeaway', component: ApplyTimeAwayComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'mytimeawayrequests', component: MyTimeAwayRequestsComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'myleaves', component: MyLeavesComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'mytimesheet', component: MyTimesheetComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'timesheetbank', component: TimesheetBankComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'myservicerequests', component: MyServiceRequetsComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'addsr', component: AddSRComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'addattendance', component: AddAttendanceComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'expenseclaim' , component: ExpenseClaimComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'expensebank' , component: ExpenseBankComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'entity/list' , component: EntityListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'entity/save' , component: EntitySaveComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'project/save' , component: ProjectSaveComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'project/list' , component: ProjectListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'picklist/save' , component: StringMapSaveComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'picklist/list' , component: StringMapListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'systemlog/list' , component: SystemLogListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'pagenotfound' , component: PageNotFoundComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'employer/list', component: EmployerListComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'employer/save', component: EmployerSaveComponent,
        //canActivate: [AuthGuardService],
      },
      {
        path: 'rewardskip', component: RewardSkipComponent,
      },
      {
        path: 'test/rewardskip', component: InvoiceComponent
      },
      {
        path: 'finance/mytransaction', component: MyTransactionComponent
      },
      {
        path: 'finance/transaction', component: TransactionComponent
      },
      {
        path: 'finance/ledger', component: LedgerComponent
      },
      {
        path: 'finance/vender/list', component: VenderComponent
      },
      {
        path: 'finance/vender/save', component: VenderSaveComponent
      },
      {
        path: 'report', component: ReportComponent
      },
      {
        path: 'finance/lender', component: LenderComponent
      },
      {
        path: 'report/unsoldproducts', component: UnsoldProductsComponent
      },
      {
        path: 'shifttiming/myshifts' , component: MyShiftsComponent
      },
      {
        path: 'shifttiming/awaitingmyapproval' , component: AwaitingMyApprovalComponent
      },
      {
        path: 'shifttiming/requestnewshifttiming' , component: RequestNewShiftTimingComponent
      }

    ],



  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ToastrModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { ShiftComponent } from './layout/component/Attendance-and-leaves/component/shift/shift.component';
import { SubdashboardComponent } from './layout/component/dashboard/components/subdashboard/subdashboard.component';
import { Role } from './models/role';
import { SubCategoryComponent } from './layout/component/Service-request/component/sub-category/sub-category.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: 'navbar', component: NavBarComponent},
  // {path: 'subdashboard' , component: SubdashboardComponent},



  {
    path: 'dashboard', component: DefaultComponent,
      canActivate: [AuthGuardService],
      // data: { roles: [
      //   Role.Admin,
      //   Role.HR,
      //   Role.Manager,
      //   Role.User
      // ] },

    children: [
      {
        path: '', component: DashboardComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: 'employee/details', component: EmployeeDetailsComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'employee/list', component: EmployeeListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
        ]}
      },
      {
        path: 'create/new/employee', component:CreateEmployeeComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'edit/employee/:id',component:EditEmployeeComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'addattendance', component: AddAttendanceComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'myattendance', component: MyAttendanceComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'use/attendance/:id/:name', component: MyAttendanceComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'applytimeaway', component: ApplyTimeAwayComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'mytimeawayrequests', component: MyTimeAwayRequestsComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'myleaves', component: MyLeavesComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'shift', component: ShiftComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'mytimesheet', component: MyTimesheetComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'timesheetbank', component: TimesheetBankComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'myservicerequests', component: MyServiceRequetsComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'subcategory', component: SubCategoryComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'addsr', component: AddSRComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },

      {
        path: 'expenseclaim' , component: ExpenseClaimComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'expensebank' , component: ExpenseBankComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'entity/list' , component: EntityListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'entity/save' , component: EntitySaveComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'project/save' , component: ProjectSaveComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'project/list' , component: ProjectListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'picklist/save' , component: StringMapSaveComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'picklist/list' , component: StringMapListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'systemlog/list' , component: SystemLogListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'pagenotfound' , component: PageNotFoundComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
      },
      {
        path: 'employer/list', component: EmployerListComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'employer/save', component: EmployerSaveComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'rewardskip', component: RewardSkipComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'test/rewardskip', component: InvoiceComponent
      },
      {
        path: 'finance/mytransaction', component: MyTransactionComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'finance/transaction', component: TransactionComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'finance/ledger', component: LedgerComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'finance/vender/list', component: VenderComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'finance/vender/save', component: VenderSaveComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'report', component: ReportComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'finance/lender', component: LenderComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'report/unsoldproducts', component: UnsoldProductsComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          //Role.HR,
          //Role.Manager,
          //Role.User
        ]}
      },
      {
        path: 'subdashboard' , component: SubdashboardComponent,
        canActivate: [AuthGuardService],
        data: { roles: [
          Role.Admin,
          Role.HR,
          Role.Manager,
          Role.User
        ]}
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './layout/component/employee/component/employee-details/employee-details.component';
import { EmployeeListComponent } from './layout/component/employee/component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './layout/component/employee/component/create-employee/create-employee.component';
import { EditEmployeeComponent } from './layout/component/employee/component/edit-employee/edit-employee.component';
import { MyAttendanceComponent } from './layout/component/Attendance-and-leaves/my-attendance/my-attendance.component';
import { ApplyTimeAwayComponent } from './layout/component/Attendance-and-leaves/apply-time-away/apply-time-away.component';
import { MyTimeAwayRequestsComponent } from './layout/component/Attendance-and-leaves/my-time-away-requests/my-time-away-requests.component';
import { MyLeavesComponent } from './layout/component/Attendance-and-leaves/my-leaves/my-leaves.component';
import { MyTimesheetComponent } from './layout/component/Timesheet/my-timesheet/my-timesheet.component';
import { TimesheetBankComponent } from './layout/component/Timesheet/timesheet-bank/timesheet-bank.component';
import { MyServiceRequetsComponent } from './layout/component/Service-request/my-service-requets/my-service-requets.component';
import { AddSRComponent } from './layout/component/Service-request/add-sr/add-sr.component';
import { AddAttendanceComponent } from './layout/component/Attendance-and-leaves/add-attendance/add-attendance.component';
import { ExpenseClaimComponent } from './layout/component/Expense/expense-claim/expense-claim.component';
import { ExpenseBankComponent } from './layout/component/Expense/expense-bank/expense-bank.component';
import { EntityListComponent } from './layout/component/Admin/entity/entity-list/entity-list.component';
import { EntitySaveComponent } from './layout/component/Admin/entity/entity-save/entity-save.component';
import { ProjectSaveComponent } from './layout/component/Admin/project/project-save/project-save.component';
import { ProjectListComponent } from './layout/component/Admin/project/project-list/project-list.component';
import { StringMapSaveComponent } from './layout/component/Admin/string-map/string-map-save/string-map-save.component';
import { StringMapListComponent } from './layout/component/Admin/string-map/string-map-list/string-map-list.component';
import { SystemLogListComponent } from './layout/component/Admin/system-log/system-log-list/system-log-list.component';
import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavBarComponent},
  {
    path: 'dashboard', component: DefaultComponent, 
    //canActivate: [AuthGuardService],

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
        path: 'create/new/employee', component:CreateEmployeeComponent
      },
      {
        path: 'edit/employee/:id',component:EditEmployeeComponent
      },
      {
        path: 'myattendance', component: MyAttendanceComponent,
      },
      {
        path: 'applytimeaway', component: ApplyTimeAwayComponent,
      },
      {
        path: 'mytimeawayrequests', component: MyTimeAwayRequestsComponent,
      },
      {
        path: 'myleaves', component: MyLeavesComponent,
      },
      {
        path: 'mytimesheet', component: MyTimesheetComponent,
      },
      {
        path: 'timesheetbank', component: TimesheetBankComponent,
      },
      {
        path: 'myservicerequests', component: MyServiceRequetsComponent,
      },
      {
        path: 'addsr', component: AddSRComponent,
      },
      {
        path: 'addattendance', component: AddAttendanceComponent,
      },
      {
        path: 'expenseclaim' , component: ExpenseClaimComponent,
      },
      {
        path: 'expensebank' , component: ExpenseBankComponent,
      },
      {
        path: 'entity/list' , component: EntityListComponent,
      },
      {
        path: 'entity/save' , component: EntitySaveComponent,
      },
      {
        path: 'project/save' , component: ProjectSaveComponent,
      },
      {
        path: 'project/list' , component: ProjectListComponent,
      },
      {
        path: 'picklist/save' , component: StringMapSaveComponent,
      },
      {
        path: 'picklist/list' , component: StringMapListComponent,
      },
      {
        path: 'systemlog/list' , component: SystemLogListComponent,
      },
      {
        path: 'pagenotfound' , component: PageNotFoundComponent,
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

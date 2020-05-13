import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, 
  MatToolbarModule,
   MatListModule,
    MatButtonModule,
     MatIconModule,
     MatDividerModule, 
     MatNativeDateModule,
      MatDatepickerModule,
     MatFormFieldModule,
    MatFormFieldControl } from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginService } from './login/services/login.service';



import { DefaultComponent } from './layout/default/default.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/common/side-bar/side-bar.component';
import { FooterComponent } from './layout/common/footer/footer.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth/auth-guard.service';
import {MatSelectModule} from '@angular/material/select';
import { EmployeeDetailsComponent } from './layout/component/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './layout/component/employee/employee-list/employee-list.component';
import { MyAttendanceComponent } from './layout/component/Attendance-and-leaves/my-attendance/my-attendance.component';
import { ApplyTimeAwayComponent } from './layout/component/Attendance-and-leaves/apply-time-away/apply-time-away.component';
import { MyTimeAwayRequestsComponent } from './layout/component/Attendance-and-leaves/my-time-away-requests/my-time-away-requests.component';
import { MyLeavesComponent } from './layout/component/Attendance-and-leaves/my-leaves/my-leaves.component';
import { CreateEmployeeComponent } from './layout/component/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './layout/component/employee/edit-employee/edit-employee.component'; 
import { EmployeeService } from './layout/component/employee/services/employee.service';

import { MyTimesheetComponent } from './layout/component/Timesheet/my-timesheet/my-timesheet.component';
import { TimesheetBankComponent } from './layout/component/Timesheet/timesheet-bank/timesheet-bank.component';
import { MyServiceRequetsComponent } from './layout/component/Service-request/my-service-requets/my-service-requets.component';
import { AddSRComponent } from './layout/component/Service-request/add-sr/add-sr.component';
import { CommentsComponent } from './layout/component/Timesheet/comments/comments.component';
import { TimesheetService } from './layout/component/Timesheet/service/timesheet.service';
import { AddAttendanceComponent } from './layout/component/Attendance-and-leaves/add-attendance/add-attendance.component';
import { ExpenseClaimComponent } from './layout/component/Expense/expense-claim/expense-claim.component';
import { ExpenseBankComponent } from './layout/component/Expense/expense-bank/expense-bank.component';
import { StringMapComponent } from './layout/component/Admin/string-map/string-map.component';
import { SystemLogComponent } from './layout/component/Admin/system-log/system-log.component';
import { ProjectComponent } from './layout/component/Admin/project/project.component';
import { StringMapSaveComponent } from './layout/component/Admin/string-map/string-map-save/string-map-save.component';
import { StringMapListComponent } from './layout/component/Admin/string-map/string-map-list/string-map-list.component';
import { ProjectSaveComponent } from './layout/component/Admin/project/project-save/project-save.component';
import { ProjectListComponent } from './layout/component/Admin/project/project-list/project-list.component';
import { SystemLogListComponent } from './layout/component/Admin/system-log/system-log-list/system-log-list.component';
import { EntitySaveComponent } from './layout/component/Admin/entity/entity-save/entity-save.component';
import { EntityListComponent } from './layout/component/Admin/entity/entity-list/entity-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    MyAttendanceComponent,
    ApplyTimeAwayComponent,
    MyTimeAwayRequestsComponent,
    MyLeavesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    MyTimesheetComponent,
    TimesheetBankComponent,
    MyServiceRequetsComponent,
    AddSRComponent,
    CommentsComponent,
    AddAttendanceComponent,
    ExpenseClaimComponent,
    ExpenseBankComponent,
    StringMapComponent,
    SystemLogComponent,
    ProjectComponent,
    StringMapSaveComponent,
    StringMapListComponent,
    ProjectSaveComponent,
    ProjectListComponent,
    SystemLogListComponent,
    EntitySaveComponent,
    EntityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
    // FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
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
            path: 'project' , component: ProjectComponent,


          },
          {
            path: 'stringmap' , component: StringMapComponent,
          },
          {
            path: 'systemlog' , component: SystemLogComponent,
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
            path: 'stringmap/save' , component: StringMapSaveComponent,
          },
          {
            path: 'stringmap/list' , component: StringMapListComponent,
          },
          {
            path: 'systemlog/list' , component: SystemLogComponent,
          },
        ]
      }
      ]),
    BrowserAnimationsModule

  ],
  entryComponents:[CommentsComponent],
  providers: [LoginService, AuthGuardService, EmployeeService, TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { StringMapSaveComponent } from './layout/component/Admin/string-map/string-map-save/string-map-save.component';
import { StringMapListComponent } from './layout/component/Admin/string-map/string-map-list/string-map-list.component';
import { ProjectSaveComponent } from './layout/component/Admin/project/project-save/project-save.component';
import { ProjectListComponent } from './layout/component/Admin/project/project-list/project-list.component';
import { SystemLogListComponent } from './layout/component/Admin/system-log/system-log-list/system-log-list.component';
import { EntitySaveComponent } from './layout/component/Admin/entity/entity-save/entity-save.component';
import { EntityListComponent } from './layout/component/Admin/entity/entity-list/entity-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { TokenizedInterceptor } from './TokenizedInterceptor/Tokenized-Interceptor';
import { EntityService } from './layout/component/Admin/entity/service/entity.service';
import { PopupComponent } from './layout/component/Admin/string-map/popup/popup.component';
import { SearchPipe } from './layout/component/Admin/entity/search.pipe';
import { StringMapService } from './layout/component/Admin/string-map/service/string-map.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { EditpicklistComponent } from './layout/component/Admin/string-map/editpicklist/editpicklist.component';

import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';






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
    StringMapSaveComponent,
    StringMapListComponent,
    ProjectSaveComponent,
    ProjectListComponent,
    SystemLogListComponent,
    EntitySaveComponent,
    EntityListComponent,
    PopupComponent,
    EditpicklistComponent,
   

     SearchPipe,
    PageNotFoundComponent

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
    CKEditorModule,
    BrowserAnimationsModule

  ],
  entryComponents:[CommentsComponent, EditpicklistComponent, PopupComponent],

  providers: [
     //{provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginService, 
    AuthGuardService,
    EmployeeService,
    TimesheetService, 
    AuthService,
    EntityService,
    StringMapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

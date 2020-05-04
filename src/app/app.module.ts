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
    EditEmployeeComponent
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
          }

          

        ]
      }
      ]),
    BrowserAnimationsModule

  ],
  providers: [LoginService, AuthGuardService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

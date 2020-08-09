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

import { ToastrModule } from 'ngx-toastr';



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
import { EmployeeDetailsComponent } from './layout/component/employee/component/employee-details/employee-details.component';
import { EmployeeListComponent } from './layout/component/employee/component/employee-list/employee-list.component';
import { MyAttendanceComponent } from './layout/component/Attendance-and-leaves/component/my-attendance/my-attendance.component';
import { ApplyTimeAwayComponent } from './layout/component/Attendance-and-leaves/component/apply-time-away/apply-time-away.component';
import { MyTimeAwayRequestsComponent } from './layout/component/Attendance-and-leaves/component/my-time-away-requests/my-time-away-requests.component';
import { MyLeavesComponent } from './layout/component/Attendance-and-leaves/component/my-leaves/my-leaves.component';
import { CreateEmployeeComponent } from './layout/component/employee/component/create-employee/create-employee.component';
import { EditEmployeeComponent } from './layout/component/employee/component/edit-employee/edit-employee.component';
import { EmployeeService } from './layout/component/employee/services/employee.service';

import { MyTimesheetComponent } from './layout/component/Timesheet/component/my-timesheet/my-timesheet.component';
import { TimesheetBankComponent } from './layout/component/Timesheet/component/timesheet-bank/timesheet-bank.component';
import { MyServiceRequetsComponent } from './layout/component/Service-request/component/my-service-requets/my-service-requets.component';
import { AddSRComponent } from './layout/component/Service-request/component/add-sr/add-sr.component';
import { CommentsComponent } from './layout/component/Timesheet/component/comments/comments.component';
import { TimesheetService } from './layout/component/Timesheet/service/timesheet.service';
import { AddAttendanceComponent } from './layout/component/Attendance-and-leaves/component/add-attendance/add-attendance.component';
import { ExpenseClaimComponent } from './layout/component/Expense/component/expense-claim/expense-claim.component';
import { ExpenseBankComponent } from './layout/component/Expense/component/expense-bank/expense-bank.component';
import { StringMapSaveComponent } from './layout/component/Admin/string-map/component/string-map-save/string-map-save.component';
import { StringMapListComponent } from './layout/component/Admin/string-map/component/string-map-list/string-map-list.component';
import { ProjectSaveComponent } from './layout/component/Admin/project/component/project-save/project-save.component';
import { ProjectListComponent } from './layout/component/Admin/project/component/project-list/project-list.component';
import { SystemLogListComponent } from './layout/component/Admin/system-log/system-log-list/system-log-list.component';
import { EntitySaveComponent } from './layout/component/Admin/entity/component/entity-save/entity-save.component';
import { EntityListComponent } from './layout/component/Admin/entity/component/entity-list/entity-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { TokenizedInterceptor } from './TokenizedInterceptor/Tokenized-Interceptor';
import { EntityService } from './layout/component/Admin/entity/service/entity.service';
import { PopupComponent } from './layout/component/Admin/string-map/component/popup/popup.component';
import { SearchPipe } from './layout/component/Admin/entity/search.pipe';
import { StringMapService } from './layout/component/Admin/string-map/service/string-map.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { EditpicklistComponent } from './layout/component/Admin/string-map/component/editpicklist/editpicklist.component';

import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';
import { ProjectService } from './layout/component/Admin/project/service/project.service';
import { SystemLogService } from './layout/component/Admin/system-log/service/system-log.service';
import { AttendanceService } from './layout/component/Attendance-and-leaves/service/attendance.service';
import { ExpenseService } from './layout/component/Expense/service/expense.service';
import { ServiceRequestsService } from './layout/component/Service-request/service/service-requests.service';
import { EmployerListComponent } from './layout/component/Admin/employer/component/employer-list/employer-list.component';
import { EmployerSaveComponent } from './layout/component/Admin/employer/component/employer-save/employer-save.component';
import { EmployerSearchPipe } from './layout/component/Admin/employer/employer-search.pipe';
import { AddAttendanceSearchPipe } from './layout/component/Attendance-and-leaves/pipe/add-attendance-search.pipe';
import { PrintLayoutComponent } from './layout/component/employee/component/create-employee/print-layout/print-layout.component';
import { InvoiceComponent } from './layout/component/employee/component/create-employee/invoice/invoice.component';
import { PrintService } from './layout/component/employee/services/print.service';
import { PrintPopupComponent } from './layout/component/employee/component/create-employee/print-popup/print-popup.component';
import { ListEmployeePipe } from './layout/component/employee/list-employee.pipe';
import { RewardSkipComponent } from './layout/component/reward-skip/component/reward-skip.component';
import { RewardSkipService } from './layout/component/reward-skip/service/reward-skip.service';
import { AddRewardComponent } from './layout/component/reward-skip/component/add-reward/add-reward.component';
import { CustomToastrService } from './service/customToastr.service';
import { ErrorHandlingService } from './service/error-handling.service';
import { MyTransactionComponent } from './layout/component/Finance/component/my-transaction/my-transaction.component';
import { TransactionComponent } from './layout/component/Finance/component/transaction/transaction.component';
import { LedgerComponent } from './layout/component/Finance/component/ledger/ledger.component';
import { VenderSearchPipe } from './layout/component/Finance/component/vender/vender-search.pipe';
import { LenderComponent } from './layout/component/Finance/component/lender/component/lender.component';
import { VenderComponent } from './layout/component/Finance/component/vender/component/vender-list/vender.component';
import { VenderSaveComponent } from './layout/component/Finance/component/vender/component/vender-save/vender-save.component';
import { LenderSearchPipe } from './layout/component/Finance/component/lender/lender-search.pipe';
import { UnsoldProductsComponent } from './layout/component/Report/components/unsold-products/unsold-products.component';
import { ReportComponent } from './layout/component/Report/components/report/report.component';
import { ReportService } from './layout/component/Report/service/report.service';
import { UnsoldPipe } from './layout/component/Report/pipe/unsold.pipe';
import { ShiftComponent } from './layout/component/Attendance-and-leaves/component/shift/shift.component';
import { PopupshiftComponent } from './layout/component/Attendance-and-leaves/component/popupshift/popupshift.component';
import { ShiftTimeService } from './layout/component/Attendance-and-leaves/service/shift-time.service';



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
    PageNotFoundComponent,
    EmployerListComponent,
    EmployerSaveComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    PrintPopupComponent,


    SearchPipe,
    EmployerSearchPipe,
    AddAttendanceSearchPipe,
    ListEmployeePipe,
    RewardSkipComponent,
    AddRewardComponent,
    MyTransactionComponent,
    TransactionComponent,
    LedgerComponent,
    VenderComponent,
    ReportComponent,
    VenderSaveComponent,
    LenderComponent,
    UnsoldProductsComponent,
    VenderSearchPipe,
    LenderSearchPipe,
    UnsoldPipe,
    ShiftComponent,
    PopupshiftComponent


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
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        autoDismiss: true

      }

    )


  ],
  entryComponents:[CommentsComponent, EditpicklistComponent, PopupComponent, PrintPopupComponent, AddRewardComponent, PopupshiftComponent],

  providers: [
     {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginService,
    AuthGuardService,
    EmployeeService,
    TimesheetService,
    AuthService,
    EntityService,
    ProjectService,
    SystemLogService,
    AttendanceService,
    ExpenseService,
    ServiceRequestsService,
    PrintService,
    RewardSkipService,
    CustomToastrService,
    ErrorHandlingService,
    ReportService,
    ShiftTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

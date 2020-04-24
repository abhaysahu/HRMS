import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/services/login.service';
import { DefaultComponent } from './layout/default/default.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/common/side-bar/side-bar.component';
import { FooterComponent } from './layout/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},

      {
        path: '',component: DefaultComponent,

        children: [{
          
        }]
      }
      

    ])

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

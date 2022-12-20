import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { CrudRetailerComponent } from './components/crud-retailer/crud-retailer.component';
import { MintNftComponent } from './components/mint-nft/mint-nft.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    RetailerComponent,
    UploadFilesComponent,
    CrudRetailerComponent,
    MintNftComponent,
    RegisterAdminComponent,
    ActivateAccountComponent,
    LoginAdminComponent,
    AdminHomeComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOtpInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

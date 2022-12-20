import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { CrudRetailerComponent } from './components/crud-retailer/crud-retailer.component';
import { MintNftComponent } from './components/mint-nft/mint-nft.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'adminHome', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'retailers', component: RetailerComponent },
  { path: 'crudRetailers', component: CrudRetailerComponent},
  { path: 'mintNfts', component: MintNftComponent},
  { path: 'registerAdmins', component: RegisterAdminComponent},
  { path: 'activateAccounts', component: ActivateAccountComponent},
  { path: 'loginAdmins', component: LoginAdminComponent},
  { path: 'adminHome', component: AdminHomeComponent},
  { path: 'userHome', component: UserHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

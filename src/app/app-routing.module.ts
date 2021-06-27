import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'add-prof',component:ProfFormComponent},
  {path:'list-prof',component:ListProfComponent},
  {path:'edit-prof',component:EditProfComponent},
  {path:'login',component:LoginComponent},
  {path:'', component:DashboardComponent},
  // {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

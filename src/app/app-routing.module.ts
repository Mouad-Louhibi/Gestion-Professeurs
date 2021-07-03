import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { AddCompetanceComponent } from './components/add-competance/add-competance.component';
import { ListCompetanceComponent } from './components/list-competance/list-competance.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'add-prof',component:ProfFormComponent},
  {path:'list-prof',component:ListProfComponent},
  {path:'edit-prof',component:EditProfComponent},
  {path:'add-project',component:AddProjectComponent},
  {path:'list-project',component:ListProjectComponent},
  {path:'add-competance',component:AddCompetanceComponent},
  {path:'list-competance',component:ListCompetanceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  // {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

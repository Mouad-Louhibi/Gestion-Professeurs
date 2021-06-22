import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { StatisticComponent } from './components/statistic/statistic.component';

const routes: Routes = [
  {path:'add-prof',component:ProfFormComponent},
  {path:'list-prof',component:ListProfComponent},
  {path:'edit-prof',component:EditProfComponent},
  {path:'main', component:MainPageComponent},
  {path:'statistic', component:StatisticComponent}
  // {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

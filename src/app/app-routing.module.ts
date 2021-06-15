import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ListProfComponent } from './components/list-prof/list-prof.component';

const routes: Routes = [
  {path:'add',component:ProfFormComponent},
  {path:'list',component:ListProfComponent},
  // {path:'other', component}
  // {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfFormComponent } from './components/prof-form/prof-form.component';

const routes: Routes = [
  {path:'add',component:ProfFormComponent},
  // {path:"list",component:},
  // {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

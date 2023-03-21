import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:"",component:ListComponent,pathMatch:"full"},
  {path:"list",component:ListComponent},
  {path:"add",component:AddComponent},
  {path:"edit/:id",component:AddComponent},
  {path:"**",component:ListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddnewComponent } from './main/addnew/addnew.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { EditComponent } from './main/edit/edit.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full',
  },
  {
    path:'index',
    component:MainComponent
  },
  {
    path:'addnew',
    component:AddnewComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

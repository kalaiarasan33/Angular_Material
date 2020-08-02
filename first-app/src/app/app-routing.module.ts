import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';
import { MainComponent } from './pages/main/main.component';
import { MainDetailComponent } from './pages/main-detail/main-detail.component';
import { IndexComponent } from './pages/index/index.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full',
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'basic',
    component:BasicComponent
  },
  {
    path:'advanced',
    component:AdvancedComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'main-detail/:id',
    component:MainDetailComponent
  },
  {
    path:'movie-details',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
 // { path:'login', component:LoginComponent },
  { path:'inicio', component:DashboardComponent },
  /*{ path:'post/:id', component:PostComponent },
  { path:'update/post/:id', component:FormComponent },
  { path:'newPost', component:FormComponent, canActivate: [AuthGuard] },*/
  { path:'', pathMatch:'full', redirectTo:'/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

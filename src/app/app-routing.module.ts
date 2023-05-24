import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'admin', component: MenuAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

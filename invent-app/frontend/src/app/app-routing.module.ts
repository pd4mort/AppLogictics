import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackageTypeComponent } from './pages/package-type/packageType/package-type.component';
import { ItemsComponent } from './pages/items/items/items.component';
import { LogisticsCompaniesComponent } from './pages/logistics-companies/logistics-companies.component';
import { UsersComponent } from './pages/users/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'package-type',
    component: PackageTypeComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'logistics-companies',
    component: LogisticsCompaniesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

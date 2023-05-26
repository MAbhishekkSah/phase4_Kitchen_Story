import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { EditItemsComponent } from './edit-items/edit-items.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'aboutus',component:AboutComponent
  },
  {
    path:'itemList',component:ItemsListComponent
  },
  {
    path:'editItems', component:EditItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

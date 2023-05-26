import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { EditItemsComponent } from './edit-items/edit-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsListComponent,
    AboutComponent,
    EditItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

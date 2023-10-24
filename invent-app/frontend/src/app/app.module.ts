import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { NumberFormatPipe } from './pipe/numberformat.pipe';
import { PackageTypeComponent } from './pages/package-type/packageType/package-type.component';
import { LogisticsCompaniesComponent } from './pages/logistics-companies/logistics-companies.component';
import { ItemsComponent } from './pages/items/items/items.component';
import { UsersComponent } from './pages/users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumberFormatPipe,
    PackageTypeComponent,
    LogisticsCompaniesComponent,
    ItemsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

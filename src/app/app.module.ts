import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Client/product-list/product-list.component';
import { ProductDetailComponent } from './components/Client/product-detail/product-detail.component';
import { HomeComponent } from './components/Client/home/home.component';
import { ProductsComponent } from './components/Admin/products/products.component';
import { ProductAddComponent } from './components/Admin/product-add/product-add.component';
import { ProductEditComponent } from './components/Admin/product-edit/product-edit.component';

@NgModule( {
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }

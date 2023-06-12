import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Client/product-list/product-list.component';
import { HomeComponent } from './components/Client/home/home.component';
import { ProductsComponent } from './components/Admin/products/products.component';
import { ProductAddComponent } from './components/Admin/product-add/product-add.component';
import { ProductEditComponent } from './components/Admin/product-edit/product-edit.component';
import { SignInComponent } from './components/Client/sign-in/sign-in.component';
import { SignUpComponent } from './components/Client/sign-up/sign-up.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { AboutComponent } from './components/Client/about/about.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { CategoriesComponent } from './components/Admin/categories/categories.component';
import { CategoryAddComponent } from './components/Admin/category-add/category-add.component';
import { CategoryEditComponent } from './components/Admin/category-edit/category-edit.component';
import { ContactComponent } from './components/Client/contact/contact.component';
import { PageNotFoundComponent } from './components/Client/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/Client/product-detail/product-detail.component';

@NgModule( {
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    SignInComponent,
    SignUpComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    AboutComponent,
    DashboardComponent,
    CategoriesComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }

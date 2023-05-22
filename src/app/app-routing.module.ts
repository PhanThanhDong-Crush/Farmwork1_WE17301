import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Client/product-list/product-list.component';
import { HomeComponent } from './components/Client/home/home.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { AboutComponent } from './components/Client/about/about.component';
import { ProductDetailComponent } from './components/Client/product-detail/product-detail.component';
import { SignInComponent } from './components/Client/sign-in/sign-in.component';
import { SignUpComponent } from './components/Client/sign-up/sign-up.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutClientComponent, children: [
      { path: '', component: HomeComponent },

      { path: "products/:id", component: ProductDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: RestauranteComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-edit',
    component: ProductEditComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductEditComponent
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

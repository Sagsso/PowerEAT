import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ProductComponent } from './product/product.component';


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

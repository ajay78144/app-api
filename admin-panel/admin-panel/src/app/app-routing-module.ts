import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';


// 🌸 DASHBOARD
import {
  Dashboard
} from './pages/dashboard/dashboard';


// 🌸 CATEGORY
import {
  CategoryList
} from './pages/category/category-list/category-list';

import {
  CategoryForm
} from './pages/category/category-form/category-form';


// 🌸 IMAGE
import {
  ImageList
} from './pages/image/image-list/image-list';

import {
  ImageForm
} from './pages/image/image-form/image-form';


// 🌸 AUTH
import {
  Login
} from './pages/auth/login/login';

import {
  Register
} from './pages/auth/register/register';


// 🌸 ROUTES
const routes: Routes = [

  // ✅ DEFAULT
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // ✅ DASHBOARD
  {
    path: 'dashboard',
    component: Dashboard
  },

  // ✅ CATEGORY
  {
    path: 'categories',
    component: CategoryList
  },

  {
    path: 'add-category',
    component: CategoryForm
  },

  // ✅ IMAGE
  {
    path: 'images',
    component: ImageList
  },

  {
    path: 'add-image',
    component: ImageForm
  },

  // ✅ AUTH
  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  // ✅ INVALID ROUTE
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];


// 🌸 MODULE
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}
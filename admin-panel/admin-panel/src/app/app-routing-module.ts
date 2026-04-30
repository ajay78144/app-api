import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ✅ Same simple imports
import { Dashboard } from './pages/dashboard/dashboard';
import { CategoryList } from './pages/category/category-list/category-list';
import { CategoryForm } from './pages/category/category-form/category-form';
import { ImageList } from './pages/image/image-list/image-list';
import { ImageForm } from './pages/image/image-form/image-form';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

const routes: Routes = [
  { path: '', component: Dashboard },

  { path: 'categories', component: CategoryList },
  { path: 'add-category', component: CategoryForm },

  { path: 'images', component: ImageList },
  { path: 'add-image', component: ImageForm },

  { path: 'login', component: Login },
  { path: 'register', component: Register},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
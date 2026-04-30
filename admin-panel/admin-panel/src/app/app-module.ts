import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';

// ✅ Components (NO .component naming)
import { App } from './app';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';

import { CategoryList } from './pages/category/category-list/category-list';
import { CategoryForm } from './pages/category/category-form/category-form';

import { ImageList } from './pages/image/image-list/image-list';
import { ImageForm } from './pages/image/image-form/image-form';

import { Header } from './shared/header/header';
import { Sidebar } from './shared/sidebar/sidebar';
import { Loader } from './shared/loader/loader';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Dashboard,
    CategoryList,
    CategoryForm,
    ImageList,
    ImageForm,
    Header,
    Sidebar,
    Loader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule   // 🔥 FIX (router-outlet error solve)
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',

  standalone: false,

  templateUrl: './sidebar.html',

  styleUrls: ['./sidebar.css'],
})

export class Sidebar {

  constructor(

    private router: Router

  ) {}

  // 🌸 LOGOUT
  logout(){

    // 🌸 REMOVE STORAGE
    localStorage.removeItem(
      'admin'
    );

    localStorage.removeItem(
      'user'
    );

    localStorage.removeItem(
      'editCategory'
    );

    localStorage.removeItem(
      'editImage'
    );

    // 🌸 ALERT
    alert(
      'Logout Success'
    );

    // 🌸 REDIRECT
    this.router.navigateByUrl(
      '/login'
    );

  }

}
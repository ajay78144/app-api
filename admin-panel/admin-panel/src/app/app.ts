import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.html',

  styleUrls: ['./app.css'],

  standalone: false

})

export class App {

  constructor(
    public router: Router
  ) {}

  // 🌸 CHECK AUTH PAGE
  isAuthPage(){

    return (
      this.router.url === '/login'
      ||
      this.router.url === '/register'
    );

  }

}
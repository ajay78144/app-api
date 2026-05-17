import { Component } from '@angular/core';

import { Router } from '@angular/router';


import { AuthService }
from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',

  standalone: false,

  templateUrl: './login.html',

  styleUrls: ['./login.css'],
})

export class Login {

  // 🌸 VARIABLES
  email = '';

  password = '';

  loading = false;

  constructor(

    private authService:
    AuthService,

    private router: Router

  ) {}

  // 🌸 LOGIN
  login(){

    // 🌸 VALIDATION
    if(
      this.email == '' ||
      this.password == ''
    ){

      alert(
        'Please fill all fields'
      );

      return;

    }

    this.loading = true;

    // 🌸 BODY
    const data = {

      email: this.email,

      password: this.password

    };

    // 🌸 API
    this.authService
    .login(data)
    .subscribe({

      next:(result:any)=>{

        console.log(result);

        this.loading = false;

        // 🌸 SUCCESS
        if(result.success){

          // 🌸 SAVE LOGIN
          localStorage.setItem(
            'admin',
            'true'
          );

          // 🌸 SAVE USER
          localStorage.setItem(
            'user',
            JSON.stringify(result)
          );


           // 🌸 REDIRECT
          // this.router.navigate([
          //   '/'
          // ]);

          window.location.href='/dashboard';


          alert(
            'Login Success'
          );

         

        }

        else{

          alert(
            result.message ||
            'Login Failed'
          );

        }

      },

      error:(err)=>{

        console.log(err);

        this.loading = false;

        alert(
          'Server Error'
        );

      }

    });

  }

}
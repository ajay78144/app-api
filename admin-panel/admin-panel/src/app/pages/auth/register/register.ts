import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService }
from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',

  standalone: false,

  templateUrl: './register.html',

  styleUrls: ['./register.css'],
})

export class Register {

  // 🌸 VARIABLES
  email = '';

  password = '';

  loading = false;

  constructor(

    private authService:
    AuthService,

    private router: Router

  ) {}

  // 🌸 REGISTER
  registerUser(){

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
    .register(data)
    .subscribe({

      next:(result:any)=>{

        console.log(result);

        this.loading = false;

        // 🌸 SUCCESS
        if(result.success){

          alert(
            'Register Success'
          );

          // 🌸 REDIRECT
          this.router.navigateByUrl(
            '/login'
          );

        }

        else{

          alert(
            result.message ||
            'Register Failed'
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
import { Injectable } from '@angular/core';

import { HttpClient }
from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // 🌸 API URL
  api =
  'https://mehndi-api.trendoradigital.com/api/auth';

  constructor(
    private http: HttpClient
  ) {}

  // 🌸 REGISTER
  register(body:any){

    return this.http.post(

      `${this.api}/register`,

      body

    );

  }

  // 🌸 LOGIN
  login(body:any){

    return this.http.post(

      `${this.api}/login`,

      body

    );

  }

  // 🌸 LOGOUT
  logout(){

    localStorage.removeItem(
      'admin'
    );

    localStorage.removeItem(
      'user'
    );

  }

  // 🌸 CHECK LOGIN
  isLoggedIn(){

    return localStorage.getItem(
      'admin'
    ) == 'true';

  }

  // 🌸 GET USER
  getUser(){

    return JSON.parse(

      localStorage.getItem(
        'user'
      ) || '{}'

    );

  }

}
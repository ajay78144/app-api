import { Injectable } from '@angular/core';

import { HttpClient }
from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  api =
  'https://mehndi-api.trendoradigital.com/api/categories';

  constructor(
    private http: HttpClient
  ) {}

  // 🌸 GET CATEGORY
  getCategories(){

    return this.http.get(
      this.api
    );

  }

  // 🌸 ADD CATEGORY
  addCategory(body:any){

    return this.http.post(
      this.api,
      body
    );

  }

  // 🌸 DELETE CATEGORY
  deleteCategory(id:any){

    return this.http.delete(

      `${this.api}/${id}`

    );

  }

  // 🌸 UPDATE CATEGORY
  updateCategory(
    id:any,
    body:any
  ){

    return this.http.put(

      `${this.api}/${id}`,

      body

    );

  }

}
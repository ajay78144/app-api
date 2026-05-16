import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  api =
  'https://mehndi-api.trendoradigital.com/api/images';

  constructor(
    private http: HttpClient
  ) {}

  // 🌸 GET IMAGES
  getImages(){

    return this.http.get(
      this.api
    );

  }

  // 🌸 ADD IMAGE
  addImage(body:any){

    return this.http.post(
      this.api,
      body
    );

  }

  // 🌸 DELETE IMAGE
  deleteImage(id:any){

    return this.http.delete(

      `${this.api}/${id}`

    );

  }

  // 🌸 UPDATE IMAGE
  updateImage(
    id:any,
    body:any
  ){

    return this.http.put(

      `${this.api}/${id}`,

      body

    );

  }

}
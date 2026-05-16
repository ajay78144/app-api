import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ImageService }
from '../../../core/services/image.service';

@Component({
  selector: 'app-image-list',

  standalone: false,

  templateUrl: './image-list.html',

  styleUrls: ['./image-list.css'],
})

export class ImageList {

  // 🌸 IMAGE ARRAY
  images:any = [];

  constructor(

    private imageService:
    ImageService,

    private router: Router

  ){

    // 🌸 PAGE LOAD
    this.getImages();

  }

  // 🌸 GET IMAGES
  getImages(){

    this.imageService
    .getImages()
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        this.images = res;

      },

      error:(err)=>{

        console.log(err);

        alert(
          'Image Load Failed'
        );

      }

    });

  }

  // 🌸 DELETE IMAGE
  deleteImage(id:any){

    // 🌸 CONFIRM
    if(
      !confirm(
        'Delete this image?'
      )
    ){

      return;

    }

    this.imageService
    .deleteImage(id)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        alert(
          'Image Deleted'
        );

        // 🌸 RELOAD
        this.getImages();

      },

      error:(err)=>{

        console.log(err);

        alert(
          'Delete Failed'
        );

      }

    });

  }

  // 🌸 EDIT IMAGE
  editImage(item:any){

    console.log(item);

    // 🌸 SAVE EDIT DATA
    localStorage.setItem(

      'editImage',

      JSON.stringify(item)

    );

    // 🌸 REDIRECT
    this.router.navigate([
      '/add-image'
    ]);

  }

}
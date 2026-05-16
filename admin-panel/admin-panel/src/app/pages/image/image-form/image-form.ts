import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ImageService }
from '../../../core/services/image.service';

import { CategoryService }
from '../../../core/services/category.service';

@Component({
  selector: 'app-image-form',

  standalone: false,

  templateUrl: './image-form.html',

  styleUrls: ['./image-form.css']

})

export class ImageForm {

  imageUrl = '';

  category = '';

  trending = false;

  categories:any = [];

  editMode = false;

  editId = '';

  constructor(

    private imageService:
    ImageService,

    private categoryService:
    CategoryService,

    private router: Router

  ){

    this.getCategories();

    // 🌸 CHECK EDIT
    const data:any =
    localStorage.getItem(
      'editImage'
    );

    if(data){

      const image =
      JSON.parse(data);

      this.editMode = true;

      this.editId = image._id;

      this.imageUrl =
      image.imageUrl;

      this.category =
      image.category?._id ||
      image.category;

      this.trending =
      image.trending;

    }

    else{

      this.resetForm();

    }

  }

  // 🌸 GET CATEGORY
  getCategories(){

    this.categoryService
    .getCategories()
    .subscribe({

      next:(res:any)=>{

        this.categories = res;

      },

      error:(err)=>{

        console.log(err);

      }

    });

  }

  // 🌸 ADD / UPDATE IMAGE
  uploadImage(){

    if(
      this.imageUrl == '' ||
      this.category == ''
    ){

      alert(
        'Please fill all fields'
      );

      return;

    }

    const body = {

      imageUrl: this.imageUrl,

      category: this.category,

      trending: this.trending

    };

    // 🌸 UPDATE
    if(this.editMode){

      this.imageService
      .updateImage(
        this.editId,
        body
      )
      .subscribe({

        next:(res:any)=>{

          alert(
            'Image Updated'
          );

          localStorage.removeItem(
            'editImage'
          );

          this.resetForm();

          this.router.navigate([
            '/images'
          ]);

        },

        error:(err)=>{

          console.log(err);

          alert(
            'Update Failed'
          );

        }

      });

    }

    // 🌸 ADD IMAGE
    else{

      this.imageService
      .addImage(body)
      .subscribe({

        next:(res:any)=>{

          alert(
            'Image Uploaded'
          );

          this.resetForm();

        },

        error:(err)=>{

          console.log(err);

          alert(
            'Upload Failed'
          );

        }

      });

    }

  }

  // 🌸 NEW IMAGE
  newImage(){

    localStorage.removeItem(
      'editImage'
    );

    this.resetForm();

  }

  // 🌸 RESET
  resetForm(){

    this.imageUrl = '';

    this.category = '';

    this.trending = false;

    this.editMode = false;

    this.editId = '';

  }

}
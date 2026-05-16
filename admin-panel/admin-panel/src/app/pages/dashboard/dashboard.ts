import { Component } from '@angular/core';

import { ImageService }
from '../../core/services/image.service';

import { CategoryService }
from '../../core/services/category.service';

@Component({
  selector: 'app-dashboard',

  standalone: false,

  templateUrl: './dashboard.html',

  styleUrls: ['./dashboard.css'],

})

export class Dashboard {

  // 🌸 DATA
  totalImages = 0;

  totalCategories = 0;

  trendingImages = 0;

  latestImages:any = [];

  constructor(

    private imageService:
    ImageService,

    private categoryService:
    CategoryService

  ){

    // 🌸 LOAD
    this.getCategories();

    this.getImages();

  }

  // 🌸 GET CATEGORY
  getCategories(){

    this.categoryService
    .getCategories()
    .subscribe((res:any)=>{

      console.log(res);

      this.totalCategories =
      res.length;

    });

  }

  // 🌸 GET IMAGES
  getImages(){

    this.imageService
    .getImages()
    .subscribe((res:any)=>{

      console.log(res);

      // 🌸 TOTAL
      this.totalImages =
      res.length;

      // 🌸 TRENDING
      this.trendingImages =
      res.filter(
        (x:any)=>
        x.trending === true
      ).length;

      // 🌸 LATEST
      this.latestImages =
      res.slice(0,6);

    });

  }

}
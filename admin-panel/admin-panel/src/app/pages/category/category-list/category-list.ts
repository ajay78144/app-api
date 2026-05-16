import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CategoryService }
from '../../../core/services/category.service';

@Component({
  selector: 'app-category-list',

  standalone: false,

  templateUrl: './category-list.html',

  styleUrls: ['./category-list.css'],
})

export class CategoryList {

  // 🌸 CATEGORY ARRAY
  categories:any = [];

  constructor(

    private categoryService:
    CategoryService,

    private router: Router

  ){

    // 🌸 PAGE LOAD
    this.getCategories();

  }

  // 🌸 GET CATEGORY
  getCategories(){

    this.categoryService
    .getCategories()
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        this.categories = res;

      },

      error:(err)=>{

        console.log(err);

        alert(
          'Category Load Failed'
        );

      }

    });

  }

  // 🌸 DELETE CATEGORY
  deleteCategory(id:any){

    if(
      !confirm(
        'Delete this category?'
      )
    ){

      return;

    }

    this.categoryService
    .deleteCategory(id)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        alert(
          'Category Deleted'
        );

        // 🌸 RELOAD
        this.getCategories();

      },

      error:(err)=>{

        console.log(err);

        alert(
          'Delete Failed'
        );

      }

    });

  }

  // 🌸 EDIT CATEGORY
  editCategory(item:any){

    console.log(item);

    // 🌸 SAVE EDIT DATA
    localStorage.setItem(

      'editCategory',

      JSON.stringify(item)

    );

    // 🌸 REDIRECT
    this.router.navigate([
      '/add-category'
    ]);

  }

}
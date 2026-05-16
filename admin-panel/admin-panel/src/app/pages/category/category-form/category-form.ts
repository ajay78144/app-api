import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CategoryService }
from '../../../core/services/category.service';

@Component({
  selector: 'app-category-form',

  standalone: false,

  templateUrl: './category-form.html',

  styleUrls: ['./category-form.css'],
})

export class CategoryForm {

  // 🌸 FORM VARIABLES
  name = '';

  image = '';

  // 🌸 CATEGORY ARRAY
  categories:any = [];

  // 🌸 EDIT MODE
  editMode = false;

  editId = '';

  constructor(

    private categoryService:
    CategoryService,

    private router: Router

  ){

    // 🌸 PAGE LOAD
    this.getCategories();

    // 🌸 CHECK EDIT DATA
    const data:any =
    localStorage.getItem(
      'editCategory'
    );

    if(data){

      const category =
      JSON.parse(data);

      // 🌸 ENABLE EDIT
      this.editMode = true;

      this.editId = category._id;

      // 🌸 SET FORM DATA
      this.name = category.name;

      this.image = category.image;

    }

  }

  // 🌸 GET CATEGORY
  getCategories(){

    this.categoryService
    .getCategories()
    .subscribe((res:any)=>{

      this.categories = res;

    });

  }

  // 🌸 ADD OR UPDATE CATEGORY
  addCategory(){

    // 🌸 VALIDATION
    if(
      this.name == '' ||
      this.image == ''
    ){

      alert(
        'Please fill all fields'
      );

      return;

    }

    const body = {

      name: this.name,

      image: this.image

    };

    // 🌸 UPDATE CATEGORY
    if(this.editMode){

      this.categoryService
      .updateCategory(
        this.editId,
        body
      )
      .subscribe((res:any)=>{

        alert(
          'Category Updated'
        );

        // 🌸 REMOVE EDIT DATA
        localStorage.removeItem(
          'editCategory'
        );

        // 🌸 RESET
        this.resetForm();

        // 🌸 REDIRECT
        this.router.navigate([
          '/categories'
        ]);

      });

    }

    // 🌸 ADD CATEGORY
    else{

      this.categoryService
      .addCategory(body)
      .subscribe((res:any)=>{

        alert(
          'Category Added'
        );

        // 🌸 RESET
        this.resetForm();

        // 🌸 RELOAD
        this.getCategories();

      });

    }

  }

  // 🌸 DELETE CATEGORY
  deleteCategory(id:any){

    this.categoryService
    .deleteCategory(id)
    .subscribe((res:any)=>{

      alert(
        'Category Deleted'
      );

      this.getCategories();

    });

  }

  // 🌸 RESET FORM
  resetForm(){

    this.name = '';

    this.image = '';

    this.editMode = false;

    this.editId = '';

    // 🌸 REMOVE STORAGE
    localStorage.removeItem(
      'editCategory'
    );

  }

  // 🌸 NEW CATEGORY BUTTON
  newCategory(){

    this.resetForm();

  }

}
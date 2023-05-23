import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  category:ICategory = {
    name:""
  }

  constructor (private categoryService:CategoryService, private router:Router) {}

  onHandleSubmit(){
    this.categoryService.addCategory(this.category).subscribe(()=>{
      this.router.navigateByUrl('/admin/category')
    })
  }
 
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
  category:ICategory = {
    name:""
  }

  constructor (private categoryService:CategoryService, private router:Router, private route:ActivatedRoute) {
    this.route.paramMap.subscribe(param=>{
      const id = Number(param.get('id'));
      this.categoryService.getOneCategory(id).subscribe(data=>{
        this.category = data
        
      })
    })
  }

  onHandleSubmit(){
    this.categoryService.editCategory(this.category).subscribe(()=>{
      this.router.navigateByUrl('/admin/category')
    })
  }
}

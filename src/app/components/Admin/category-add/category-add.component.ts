import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor (private categoryService:CategoryService, private fb: FormBuilder, private router:Router) {}
  
  categoryForm = this.fb.group({
    name: ['', Validators.required]
   
  });
  onHandleSubmit(){
    if (this.categoryForm.invalid) {
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(()=>{
      alert("Thêm sản phẩm thành công!");
      this.router.navigateByUrl('/admin/category')
    })
  }
 
}

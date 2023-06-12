import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor (private categoryService:CategoryService, private fb: FormBuilder, private router:Router, private route:ActivatedRoute) {
    this.route.paramMap.subscribe(param=>{
      const id = String(param.get('id'))
      console.log(id);
      
      this.categoryService.getOneCategory(id).subscribe(data=>{
        this.category = data
        
      })
    })
  }
  categoryForm = this.fb.group({
    name: ['', Validators.required]
   
  });

  onHandleSubmit(){
    if (this.categoryForm.invalid) {
      return;
    }
    this.categoryService.editCategory(this.category).subscribe(()=>{
      alert("Sửa sản phẩm thành công!");
      this.router.navigateByUrl('/admin/category')
    })
  }
}

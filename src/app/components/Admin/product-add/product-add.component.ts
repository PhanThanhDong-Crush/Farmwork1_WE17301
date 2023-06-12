import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  product:IProduct = {
    name:"",
    price:0
  }
  category:ICategory[]=[]

  constructor (private productService:ProductService, private fb: FormBuilder,private router:Router,private categoryService:CategoryService) {
    this.categoryService.getAllCategory().subscribe(cate=>{
      this.category=cate
    })
  }
  productForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
    quantity: ['', [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
    dateAdded: ['', Validators.required],
    categoryId: ['', Validators.required]
  });

  onHandleSubmit(){
    if (this.productForm.invalid) {
      return;
    }
    this.productService.addProduct(this.product).subscribe(()=>{
      alert("Thêm sản phẩm thành công!");
      this.router.navigateByUrl('/admin/products')
    })
  }
}

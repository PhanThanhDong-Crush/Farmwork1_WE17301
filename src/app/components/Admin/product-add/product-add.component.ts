import { Component } from '@angular/core';
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

  constructor (private productService:ProductService, private router:Router,private categoryService:CategoryService) {
    this.categoryService.getAllCategory().subscribe(cate=>{
      this.category=cate
    })
  }

  onHandleSubmit(){
    this.productService.addProduct(this.product).subscribe(()=>{
      this.router.navigateByUrl('/admin/products')
    })
  }
}

import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
} )
export class ProductListComponent
{
  products:IProduct[]=[]
  categories:ICategory[]=[]

  constructor (
      private productServices:ProductService,
      private categoryService:CategoryService
    ){
    this.productServices.getAllProduct().subscribe(data =>{
      this.products =data
    },err=>console.log(err)
    )

    this.categoryService.getAllCategory().subscribe(data =>{
      this.categories =data
    },err=>console.log(err)
    )
  }


  
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component( {
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
} )
export class ProductDetailComponent
{
  item:any={
    "data":[]
  }
  products:IProduct[]=[]
  product: IProduct = {
    name: "",
    price: 0
  }
  category: ICategory[] = []
   item3:any = {
    data:[]
  }

  constructor ( private productService: ProductService, private router: Router, private categoryService: CategoryService, private paramId: ActivatedRoute )
  {
    
    this.paramId.paramMap.subscribe( param =>
    {
      const id = String( param.get( 'id' ) )
      
      this.productService.getOneProduct( id ).subscribe( data =>
      {
        this.product = data
      } )
      this.productService.getRelatedProducts(id).subscribe(data=>{
        
        this.item = data
        
      }
      
      )
    } )
    this.categoryService.getAllCategory().subscribe( cate =>
    {
      this.category = cate
    } )
    
   
  }

  onHandleSubmit ()
  {
    this.productService.editProduct( this.product ).subscribe( () =>
    {
      this.router.navigateByUrl( '/admin/products' )
    } )
  }

}

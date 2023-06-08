import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  item:any ={
    data:[]
  }
  category: ICategory[]=[]
  products:IProduct[]=[]
  constructor (private productServices:ProductService, private categoryServices: CategoryService,private router:Router,private paramId:ActivatedRoute){
    this.productServices.getAllProduct().subscribe(data =>{
      this.item =data
      this.products=this.item.data
    },err=>console.log(err)
    )
  }

  onHandleRemove(id:any){
    console.log(id);
    
    
    this.productServices.deleteProduct(id).subscribe(()=>{
      this.products = this.item.data
       this.products = this.products.filter(pr => pr._id != id)
    },err=>{
      console.log(err);
    })
  }
}

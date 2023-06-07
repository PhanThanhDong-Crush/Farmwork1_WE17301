import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
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

  products:IProduct[]=[]
  constructor (private productServices:ProductService){
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

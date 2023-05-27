import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products:IProduct[]=[]

  constructor (private productServices:ProductService){
    this.productServices.getAllProduct().subscribe(data =>{
      this.products =data
    },err=>console.log(err)
    )
  }

  onHandleRemove(id:any){
    this.productServices.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(item => item.id != id)
    },err=>{
      console.log(err);
    })
  }
}

import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  item:any = {
    data:[]
  }
  products:IProduct[]=[]

  constructor (private productServices:ProductService){
    this.productServices.getNewProduct().subscribe((data) =>{
      this.item=data;
      
      
    },err=>console.log(err)
    )
  }
}

import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
} )
export class ProductListComponent
{
  product: IProduct[] = [
    { _id: 1, name: "hehe", image: "https://i.pinimg.com/564x/1f/a5/0b/1fa50bd605cf8214103f3efa4c4ffade.jpg", price: 2909 },
    { _id: 2, name: "hihi", image: "https://i.pinimg.com/564x/1f/a5/0b/1fa50bd605cf8214103f3efa4c4ffade.jpg", price: 435 },
    { _id: 3, name: "hahah", image: "https://i.pinimg.com/564x/1f/a5/0b/1fa50bd605cf8214103f3efa4c4ffade.jpg", price: 4663 },
  ];
  status: boolean = true;
  setStatus ()
  {
    this.status = !this.status
  };
  inputValue: string = "";
  setInput ( e: any )
  {
    this.inputValue = e.target.value
    console.log( this.inputValue )
  };
  remove ( id: any )
  {
    this.product = this.product.filter( item => item._id !== id )
  }
}

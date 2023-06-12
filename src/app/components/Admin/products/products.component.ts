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
  products: IProduct[] = []
    page: number = 1;
  totalPages: number = 1;
  
  constructor (private productServices:ProductService, private categoryServices: CategoryService,private router:Router,private paramId:ActivatedRoute){
    this.productServices.productPagination(this.page).subscribe(data => {
      const product = data.data
      this.totalPages = data.totalPages
      this.products = product
      this.category = product
    }, err => console.log(err)
    )
  }
    getRange(): number[] { //phân trang
    return Array(this.totalPages).fill(0).map((x, i) => i);
  }


  setPage(i: number) { //phân trang
    this.page = i
    
    this.productServices.productPagination(this.page).subscribe(data => {
      const product = data.data
      this.products = product
    },err=>console.log(err)
    )
  }

  PreviousNext(a: string) { //phân trang
    if (a == "Previous") {
      this.page = this.page - 1
      if (this.page < 1) {
        this.page = 1
      }
    } else {
      this.page = this.page + 1
      if (this.page > this.totalPages) {
        this.page = this.totalPages
      }
    }
    this.setPage(this.page)
  }

  onHandleRemove(id:any){
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    console.log(id)  
    this.productServices.deleteProduct(id).subscribe(()=>{
       this.products = this.products.filter(pr => pr._id != id)
       alert("Xóa sản phẩm thành công!");
    },err=>{
      console.log(err);
    })
  }
}
}
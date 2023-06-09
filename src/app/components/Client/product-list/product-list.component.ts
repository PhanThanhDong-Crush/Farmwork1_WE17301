import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
} )
export class ProductListComponent implements OnInit
{
  item:any = {
    "data":[]
  }
  search:any={
    name:""
  }
  sortAscending: boolean = true;
  searchs:any=[]
  products:any[]=[]
  categories:ICategory[]=[]
  categoryId: string = "";
  categoryName: string ="";
  page: number = 1;
  totalPages: number = 1;
  constructor(
    private productServices: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    //lấy Product 
    this.productServices.productPagination(this.page).subscribe(data => {
      const product = data.data
      this.totalPages = data.totalPages
      this.products = product
    }, err => console.log(err)
    )
    //Lấy Categories
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data
    }, err => console.log(err)
    )

    
  }
    getRange(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i);
  }


  setPage(i: number) {
    this.page = i
    
    this.productServices.productPagination(this.page).subscribe(data => {
      const product = data.data
      this.products = product
    },err=>console.log(err)
    )
  }

  PreviousNext(a: string) {
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

  ngOnInit(): void {
    // Lấy danh sách tất cả categories
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, err => console.log(err));
  }
  
  handleCategoryClick(categoryId: any) {
    // Lấy danh sách sản phẩm tương ứng với category đó
    this.categoryService.getProductsByCategoryId(categoryId).subscribe(data => {
      this.products = data.products;
      console.log(data);
      
    }, err => console.log(err));
    
  }

  onHandleSubmit(){
     this.productServices.seachProduct(this.search).subscribe((data)=>{
      this.searchs=data
      this.products = this.searchs
     }   
     )
  }
    getProducts(): void {
      this.productServices.reduceProduct().subscribe(
        (response) => {
          this.products = response;
          this.sortProduct()
        },
        (error) => {
          console.error(error);
        }
      );
      }
      sortProduct(){
        this.sortAscending = !this.sortAscending;
    this.products = this.products.slice().sort((a, b) => {
      return this.sortAscending ? a.price - b.price : b.price - a.price;
    });
      }
}

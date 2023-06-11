import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{

  constructor ( private http: HttpClient ) { }

  getAllProduct (): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>( `http://localhost:8080/api/products` )
  }
  getProductsByPriceRange (min: number, max: number): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>( `http://localhost:8080/api/products-price-range?price_min=${min}&price_max=${max}` )
  }
  reduceProduct (): Observable<any>{
    return this.http.get<any>( `http://localhost:8080/api/products` )
  }
  productPagination (page:number): Observable<any>
  {
    return this.http.get<any>( `http://localhost:8080/api/products?_page=${page}` )
  }
  getRelatedProducts(id:number|string):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:8080/api/products-relate/${id}`)
  }
  
  getNewProduct (): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>( `http://localhost:8080/api/products-new` )
  }

  seachProduct (product:any): Observable<IProduct[]>
  {
    return this.http.post<IProduct[]>( `http://localhost:8080/api/products-name`,product)
  }

  getOneProduct ( id: Number | String ): Observable<IProduct>
  {
    return this.http.get<IProduct>( `http://localhost:8080/api/products/${ id }` )
  }

  addProduct ( product: IProduct ): Observable<IProduct>
  {
    return this.http.post<IProduct>( `http://localhost:8080/api/products/add`, product )
  }

  editProduct ( product: IProduct ): Observable<IProduct>
  {
    return this.http.put<IProduct>( `http://localhost:8080/api/products/edit/${ product._id }`, product )
  }

  deleteProduct ( id: Number | String ): Observable<IProduct>
  {
    return this.http.delete<IProduct>( `http://localhost:8080/api/products/${ id }` )
  }
}

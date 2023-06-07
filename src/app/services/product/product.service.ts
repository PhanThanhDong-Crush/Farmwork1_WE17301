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
  getNewProduct (): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>( `http://localhost:8080/api/products-new` )
  }

  seachProduct (): Observable<IProduct>
  {
    return this.http.get<IProduct>( `http://localhost:8080/api/products-name` )
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

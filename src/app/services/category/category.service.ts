import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';

@Injectable( {
  providedIn: 'root'
} )
export class CategoryService
{

  constructor ( private http: HttpClient ) { }

  getAllCategory (): Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>( `http://localhost:8080/api/categories` )
  }

  getOneCategory ( id: Number | String ): Observable<ICategory>
  {
    return this.http.get<ICategory>( `http://localhost:8080/api/categories/${ id }` )
  }

  addCategory ( category: ICategory ): Observable<ICategory>
  {
    return this.http.post<ICategory>( `http://localhost:8080/api/categories`, category )
  }

  editCategory ( category: ICategory ): Observable<ICategory>
  {
    return this.http.patch<ICategory>( `http://localhost:8080/api/categories/${ category._id }`, category )
  }

  deleteCategory ( id: Number | String ): Observable<ICategory>
  {
    return this.http.delete<ICategory>( `http://localhost:8080/api/categories/${ id }` )
  }
}

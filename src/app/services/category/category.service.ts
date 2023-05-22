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
    return this.http.get<ICategory[]>( `http://localhost:3000/categories` )
  }

  getOneCategory ( id: Number | String ): Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>( `http://localhost:3000/categories/${ id }` )
  }

  addCategory ( category: ICategory ): Observable<ICategory[]>
  {
    return this.http.post<ICategory[]>( `http://localhost:3000/categories`, category )
  }

  editCategory ( category: ICategory ): Observable<ICategory[]>
  {
    return this.http.patch<ICategory[]>( `http://localhost:3000/categories/${ category.id }`, category )
  }

  deleteCategory ( id: Number | String ): Observable<ICategory[]>
  {
    return this.http.delete<ICategory[]>( `http://localhost:3000/categories/${ id }` )
  }
}

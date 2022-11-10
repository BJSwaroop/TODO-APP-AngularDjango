import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentserviceService {
  

  constructor(private http: HttpClient) {

  }
    FetchTodos(): Observable<any> {
      return this.http.get<any>(`http://127.0.0.1:8000/todos/api`);
    }
    CreateTodo(data:any): Observable<any> {
      console.log(data)
      return this.http.post<any>(`http://127.0.0.1:8000/todos/api`, data).pipe();
    }
    UpdateTodo(data:any,id:any): Observable<any>{
      return this.http.put<any>(`http://127.0.0.1:8000/todos/api/${id}/`, data).pipe();
    }
    delete(id:any){
      return this.http.delete<any>(`http://127.0.0.1:8000/todos/api/${id}`).pipe();
    }
}




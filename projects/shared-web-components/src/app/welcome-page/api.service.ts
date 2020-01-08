import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }
  
  getTodos():Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<any>(url);
  }
}

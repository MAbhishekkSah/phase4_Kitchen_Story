import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:8081";
  headers = new Headers().set('Content-Type','application/json');

  getItemsList(): Observable<any>{
    let endPoint = 'getAllItems';
    let url = `${this.apiUrl}/${endPoint}`;
    return this.http.get(`${url}`);
  }

  addItems(item: Items) : Observable<any> {
    let endPoint = "saveItems";
    let url = `${this.apiUrl}/${endPoint}`;
    return this.http.post<any>(`${url}`,item);
  }

  updateItems(item:Items , id:any) : Observable<any> {
    let endPoint = "updateItem";
    console.log(item);
    let url = `${this.apiUrl}/${endPoint}/${id}`;
    return this.http.put<any>(`${url}`,item);
  }
  deleteItem(id:any) :Observable<any>{
    let endPoint = "deleteItem";
    let url = `${this.apiUrl}/${endPoint}/${id}`;
    return this.http.delete<any>(`${url}`,id);
  }

}

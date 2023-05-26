import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class CommondbService {

  constructor() { }

  todoId:number=41;
  todoAction:string="";

}

import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service';
import { Router } from '@angular/router';
import { CommondbService } from '../commondb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private items_service:ItemsServiceService, private _router:Router, private common_service:CommondbService){}

  itemsList :any = [];
  isDeleted:any;
  
  ngOnInit() {
    //this.listOfItems();
    return this.items_service.getItemsList().subscribe(
      data=>{
        console.log("Response recieved");
        this.itemsList=data;
      },
      error=>console.log("Exception")
  );
  }
  listOfItems()
  {
    this.items_service.getItemsList().subscribe((response)=>{
      this.itemsList = response;
    });
  }


  editItem(id:any)
  {
    this.common_service.todoId = id;
    this.common_service.todoAction = "N";
    this._router.navigate(['editItems']);
  }
  deleteItem(id:number){
    console.log("11288");
    this.items_service.deleteItem(id).subscribe((response)=>
    {
      console.log("222");
        this.isDeleted = response;
        console.log("response = "+this.isDeleted);
    });
    console.log("11222");
   this._router.navigate(['dashboard']);
  }
  createItem(){
    this.common_service.todoId=this.common_service.todoId+1;
    this.common_service.todoAction = "Y";
    this._router.navigate(['editItems']);
  }
}

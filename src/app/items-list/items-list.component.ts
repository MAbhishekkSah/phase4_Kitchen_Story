import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service';
import { Items } from '../items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{

  itemsList:any =[];
  flag:number = 1;
  purchase:string = "N";
  constructor(private items_service:ItemsServiceService, private _router:Router){}
  searchedItemsList: Items[] = [];
  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.items_service.getItemsList().subscribe((data) =>
      this.itemsList = data
      );
  }

  searchItem(userForm:any){
    let ctr = 0,count = 0;
    console.log(userForm);
    console.log("-->"+this.itemsList[ctr].product);
    console.log(userForm.value.search);
    while(this.itemsList[ctr] != null)
    {
      if(this.itemsList[ctr].product == userForm.value.search)
      {
          this.flag = 0;
          this.searchedItemsList[count] = this.itemsList[ctr];
          console.log(this.searchedItemsList[count]);
          count++;
          console.log(count);
      }
      ctr++;
    }
    if(userForm.value.search == "" || userForm.value.search==null)
    {
      this.flag = 1;
    }
  }
  btnClick(){
    this.purchase = "Y";
  }

  pageReload()
  {
    console.log("ReLoad");
    this.purchase = "N";
    this.flag = 0;
    this._router.navigate(['itemList']);
  }
  submit(userForm:any)
  {

  }
}

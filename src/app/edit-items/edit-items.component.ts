import { Component, OnInit } from '@angular/core';
import { ItemsListComponent } from '../items-list/items-list.component';
import { CommondbService } from '../commondb.service';
import { Items } from '../items';
import { ItemsServiceService } from '../items-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit{

  constructor(private common_service:CommondbService, private items_service:ItemsServiceService, private _router:Router){}

  newItem = new Items();
  updatedItem:any;
  savedItem:any;
  ngOnInit(): void {
    console.log(this.common_service.todoId);
  }

  updateItem(userForm:any)
  {
    console.log("rrrr--"+this.common_service.todoId);
    this.newItem.product = userForm.value.product;
    this.newItem.category = userForm.value.category;
    this.newItem.price = userForm.value.price;
    this.newItem.available = userForm.value.available;
    if(this.common_service.todoAction == "N")
    {
      this.items_service.updateItems(this.newItem,this.common_service.todoId).subscribe((response)=>
        {
          this.updatedItem = response;
        }
      );
    }
    if(this.common_service.todoAction == "Y")
    {
      console.log("ttt--->");
      this.newItem.id = this.common_service.todoId;
      console.log("ppp = "+this.newItem.id)
      this.items_service.addItems(this.newItem).subscribe((response) =>
        {
            this.savedItem = response;
        });
    }
    this._router.navigate(['dashboard']);
  }
}

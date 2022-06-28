import { Component, OnInit } from '@angular/core';
import { Item } from './../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:Item[] = [ {value:"Eat breakfast"}, {value:"Eat dinner"} ]
  input:string = "";

  constructor() { }
  ngOnInit(): void { }

  delete(id:number) {
    this.items = this.items.filter((v, i) => i !== id)
  }

  add() {
    this.items.push({ value:this.input })
    this.input = ""
  }

}

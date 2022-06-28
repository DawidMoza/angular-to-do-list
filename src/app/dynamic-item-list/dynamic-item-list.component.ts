import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-dynamic-item-list',
  templateUrl: './dynamic-item-list.component.html',
  styleUrls: ['./dynamic-item-list.component.css']
})
export class DynamicItemListComponent implements OnInit {

  items:Item[] = [ {value:"Eat breakfast"}, {value:"Eat dinner"} ]

  delete(id:number) {
    this.items = this.items.filter((v, i) => i !== id)
  }

  add(input:string) {
    this.items.push({ value:input })
  }

  constructor() { }
  ngOnInit(): void { }

}

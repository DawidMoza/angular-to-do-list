import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input()
  items:Item[] = []

  @Input()
  delete:(index:number) => void = () => {}
  
  constructor() { }
  ngOnInit(): void { }

}

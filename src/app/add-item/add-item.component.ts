import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input()
  items:Item[] = []

  @Input()
  add:(text:string) => void = () => {};

  input:string = "";

  addElement() {
    this.add(this.input);
  }

  constructor() { }
  ngOnInit(): void { }

}

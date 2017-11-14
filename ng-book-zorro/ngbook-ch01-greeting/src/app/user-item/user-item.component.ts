import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nb-user',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = 'Wefine'
  }

  ngOnInit() {
  }

}

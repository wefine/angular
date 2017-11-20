import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: any): boolean {
    console.log('you submitted value:', form);

    return false
  }
}

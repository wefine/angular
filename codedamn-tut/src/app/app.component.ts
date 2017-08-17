import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = true;
  language = {
    "frontend" : ["react", "angular", "vue"]
  };
  result = 2;

  toggleDiv() {
    this.visible = !this.visible;
  }

  changeResult(event) {
    this.result = event.target.value;
  }
}

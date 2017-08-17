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

  toggleDiv() {
    this.visible = !this.visible;
  }
}

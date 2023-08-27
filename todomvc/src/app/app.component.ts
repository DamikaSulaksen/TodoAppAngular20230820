import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';

    allItems = [
      {
        id: Date.now(),
        title: 'Todo Item',
        completed: false,
        editing: false
      }
    ];

    get items() {
      return this.allItems;
    }
}

// Add changes

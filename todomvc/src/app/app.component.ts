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
      completed: false
    }
  ];

  get items() {
      if (this.filter === 'all') {
        return this.allItems;
      }

      return this.allItems.filter((item) => this.filter === 'completed' ? item.completed : !item.completed);
  }

  get remaining() {
    return this.allItems.filter(todo => !todo.completed).length;
  }

  filter: 'all' | 'active' | 'completed' = 'all';

  toggleCompletion(todo) {
    todo.completed = !todo.completed;
  }

  toggleAll() {
    this.allItems.forEach(todo => todo.completed = !todo.completed);
  }

  get completed() {
    return this.allItems.filter(todo => todo.completed);
  }

  removeCompleted() {
    this.allItems = this.allItems.filter(todo => !todo.completed);
  }
}

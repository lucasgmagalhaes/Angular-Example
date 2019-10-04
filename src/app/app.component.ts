import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItemValue: FormControl;
  todos: string[] = [];

  constructor() {
    this.todoItemValue = new FormControl("");
  }

  addTodo() {
    this.todos.push(this.todoItemValue.value);
    this.todoItemValue.reset();
  }

  remove(index: number){
    this.todos.splice(index, 1);
  }
}




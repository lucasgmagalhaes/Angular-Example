import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Example';
  todoItemValue: string;

  todos: string[] = [
    "Ler",
    "Jogar",
    "Fazer nada"
  ]

  addTodo() {
    this.todos.push(this.todoItemValue);
  }

  remove(index){
    this.todos.splice(index, 1);
  }
}




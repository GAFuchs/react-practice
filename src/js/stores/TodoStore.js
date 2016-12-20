import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1134654812,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 1134655112,
        text: 'Pay Water Bills',
        complete: false
      },
    ];
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.reloadTodos(action.todos);
        break;
      }
    }
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  reloadTodos(todos) {

    this.todos = todos;
    this.emit("change");
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;

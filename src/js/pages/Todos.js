import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      newTodoText: "",
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  handleNewTodoTextChange(event) {
    this.setState({
      newTodoText: event.target.value,
    });
  }

  createTodo() {
    TodoActions.createTodo(this.state.newTodoText);
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
//{...todo} The properties of the object that you pass in are copied onto the component's props.
        return <Todo key={todo.id} {...todo}/>;
    });

    const divStyle = {
      display: "inline-block",
      textAlign: "left",
    };

    return (
      <div>
        <div>
          <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        </div>
        <div>
          <input type="text" onChange={this.handleNewTodoTextChange.bind(this)}/>
          <button onClick={this.createTodo.bind(this)}>Create!</button>
        </div>
        <h1>Todos</h1>
        <div class="container">
          <div class="row" style={divStyle}>
            <ul>{TodoComponents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

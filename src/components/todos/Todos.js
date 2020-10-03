import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markCompleted={this.props.markCompleted}
        removeTodo={this.props.removeTodo}
      />
    ));
  }
}

export default Todos;

import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div className="container">
        <p>
          <input type="checkbox" onChange={this.props.changeTodo} />
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

export default TodoItem;

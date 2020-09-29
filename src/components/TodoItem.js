import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "15px",
      borderBottom: "1px dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="container" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.changeTodo.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

export default TodoItem;

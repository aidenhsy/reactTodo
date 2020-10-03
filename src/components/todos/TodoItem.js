import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  btnStyle = () => {
    return {
      background: "red",
      borderRadius: "50%",
      color: "white",
      border: "none",
      padding: "5px 10px",
      float: "right",
      cursor: "pointer",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onClick={this.props.markCompleted.bind(this, id)}
          />{" "}
          {title}
          <button
            style={this.btnStyle()}
            onClick={this.props.removeTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;

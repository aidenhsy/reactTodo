import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "8px",
      borderBottom: "1px dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  btnStyle = () => {
    return {
      background: "red",
      padding: "5px 8px",
      borderRadius: "50%",
      border: "none",
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
            onChange={this.props.markCompleted.bind(this, id)}
          />{" "}
          {title}
          <button
            style={this.btnStyle()}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;

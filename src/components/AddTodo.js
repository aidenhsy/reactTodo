import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "5", padding: "8px" }}
        />
        <input type="submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddTodo;

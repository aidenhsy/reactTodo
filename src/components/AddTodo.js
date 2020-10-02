import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "5", padding: "8px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddTodo;

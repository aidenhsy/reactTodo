import React, { Component } from "react";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }
  markCompleted = (id) => {
    this.setState({
      todo: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          markCompleted={this.markCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;

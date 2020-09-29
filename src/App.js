import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "title 1",
        completed: false,
      },
      {
        id: 2,
        title: "title 2",
        completed: false,
      },
      {
        id: 3,
        title: "title 2",
        completed: false,
      },
    ],
  };

  changeTodo = () => {
    console.log("change");
  };

  render() {
    return <Todos todos={this.state.todos} changeTodo={this.changeTodo} />;
  }
}

export default App;

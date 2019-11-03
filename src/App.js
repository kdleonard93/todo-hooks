import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Item 1",
      isComplete: true
    },
    {
      content: "Item 2",
      isComplete: false
    },
    {
      content: "Item 3",
      isComplete: false
    }
  ]);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value="Todo one" />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Hero } from "react-bulma-components";
import "./App.css";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "I",
      isComplete: true
    },
    {
      content: "Am",
      isComplete: false
    },
    {
      content: "Legend",
      isComplete: false
    }
  ]);

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className="h1">Hello</h1>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                className={`checkbox`}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;

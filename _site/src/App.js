import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo !== "") {
      setTodos([...todos, currentTodo]);
      setCurrentTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-4">Todo List App</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            value={currentTodo}
            onChange={(event) => setCurrentTodo(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {todo}
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

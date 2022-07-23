import React, { useReducer, useState } from "react";
import { Todos } from "./Todo";

export const ACTIONS = {
  ADD_TODOS: "ADD_TODOS",
  DELETE_TODOS: "DELETE_TODOS",
  TOGGLE_TODOS: "TOGGLE_TODOS"
};

const reducer = (todos, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, newTodo(payload.title)];

    case ACTIONS.DELETE_TODOS:
      return todos && todos.filter((todo) => todo.id !== payload.id);

    case ACTIONS.TOGGLE_TODOS:
      return (
        todos &&
        todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        })
      );

    default:
      return todos;
  }
};

const newTodo = (title) => {
  return { id: Date.now(), title: title, complete: false };
};

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleInput = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODOS,
      payload: {
        title: title
      }
    });

    setTitle("");
  };
  return (
    <div className="App">
      <form onSubmit={handleInput}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

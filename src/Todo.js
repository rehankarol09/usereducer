import React from "react";
import { ACTIONS } from "./App";

export const Todos = ({ todos, dispatch }) => {
  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <>
            <div key={todo.id}>
              <span style={{ textDecoration: todo.complete && "line-through" }}>
                {todo.title}
              </span>

              <button
                onClick={(e) =>
                  dispatch({
                    type: ACTIONS.DELETE_TODOS,
                    payload: {
                      id: todo.id
                    }
                  })
                }
              >
                DELETE
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_TODOS,
                    payload: {
                      id: todo.id
                    }
                  })
                }
              >
                Toggle
              </button>
            </div>
          </>
        ))}
    </>
  );
};

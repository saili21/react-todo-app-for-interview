import "./styles.css";
import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import ListItem from "./ListItem";
import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";

type TodoItem = {
  title: string;
  completed: boolean;
  id: number;
};

export type Filter = "all" | "completed" | "uncompleted";

let id = 0;

type Action =
  | { type: "add"; title: string }
  | { type: "toggle"; id: number }
  | {
      type: "removeCompleted";
    };

function reducer(items: TodoItem[], action: Action) {
  switch (action.type) {
    case "add":
      return [
        ...items,
        {
          title: action.title,
          completed: false,
          id: id++,
        },
      ];
    case "toggle":
      return items.map((item) => ({
        ...item,
        completed: item.id === action.id ? !item.completed : item.completed,
      }));

    case "removeCompleted":
      return items.filter((item) => {
        return !item.completed;
      });
  }
}

function App() {
  const [filter, setFilter] = useState<Filter>("all");
  const [items, dispatch] = useReducer(reducer, [
    { id: id++, title: "Task A", completed: false },
    { id: id++, title: "Task B", completed: true },
    { id: id++, title: "Task C", completed: false },
  ]);

  return (
    <>
      <h1>TODO App List</h1>
      <TodoInput
        titlePlaceholder="What needs to be done?"
        onSubmit={(title) => {
          dispatch({ type: "add", title });
        }}
      />
      <hr />
      <TodoFilter value={filter} onChange={setFilter} />
      <ul>
        {items
          .filter((item: TodoItem) => {
            switch (filter) {
              case "all":
                return true;
              case "completed":
                return item.completed;
              case "uncompleted":
                return !item.completed;
            }
          })
          .map((item) => (
            <ListItem
              key={item.id}
              title={item.title}
              completed={item.completed}
              onClick={() => {
                dispatch({ type: "toggle", id: item.id });
              }}
            />
          ))}
      </ul>
      <button
        disabled={!items.some((item) => item.completed)}
        onClick={() => {
          dispatch({ type: "removeCompleted" });
        }}
      >
        Remove completed items
      </button>
      <script src="src/index.ts"></script>
      <blockquote>
        <p>
          <b>Su&nbsp;mmary:</b>
          Currently this app is working as a simple TODO app where the todo
          items are added pressing "Enter" key in todo app
        </p>
        <br />
        <p>Tasks:</p>
        <br />
        <p>1. Update app to add ToDo Item only by pressing Submit Button</p>
        <br />
        <p>
          2. Add new input field named label, when user puts any value in label
          it should be displayed seperated by a colon(:)
        </p>
        <br />
        <p>
          3. Labels should only start with letters, use the below regex:
          /^[a-zA-Z]\w+$/
        </p>
        <br />
        <p>
          4. Add a button that will export all labels into a JSON File ( Hint
          use on click: simple vanilla JS )
        </p>
      </blockquote>
    </>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import useLocalState from "../hooks/useLocalState";

function TodoList() {
  const [todos, setTodos] = useLocalState();

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newTodo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return;
    }

    let updatedTodos = todos.map((todo) => (todo.id === id ? newTodo : todo));
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-5xl font-bold py-5">ToDo List</h1>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-md">
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoList;

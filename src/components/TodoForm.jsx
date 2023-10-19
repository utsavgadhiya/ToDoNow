import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addForm = (
    <form className="todo-form flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="Add a Todo"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button rounded-r-lg p-2 border border-gray-300 bg-white text-gray-800">Add Todo</button>
    </form>
  );

  const editForm = (
    <form className="todo-form-edit" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="Update"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-input rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white">Update</button>
    </form>
  );

  return props.edit ? editForm : addForm;
}

export default TodoForm;

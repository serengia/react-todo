import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlusCircle } from "react-icons/fa";

function Form(props) {
  const { onAddItem } = props;
  const todoInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const item = todoInputRef.current.value;
    if (item.trim().length === 0) return;
    const todo = {
      id: uuidv4(),
      item,
    };
    // setTodoObj(todo);

    const storedTodoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    storedTodoList.push(todo);
    localStorage.setItem("todoItems", JSON.stringify(storedTodoList));

    onAddItem(todo.id);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        name="todo"
        aria-label="Todo input"
        ref={todoInputRef}
        placeholder="Add to do..."
      />
      <button type="submit">
        <FaPlusCircle className="add-icon" />
      </button>
    </form>
  );
}

export default Form;

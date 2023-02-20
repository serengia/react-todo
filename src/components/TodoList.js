import React from "react";
import { FaTrash } from "react-icons/fa";

const getItems = () => JSON.parse(localStorage.getItem("todoItems")) || [];

function TodoList(props) {
  const { todoListItems, onDeleteItem } = props;

  const deleteItemHandler = (e) => {
    const { id } = e.target.closest(".trash-icon").dataset;
    if (!id) return;
    const items = getItems();
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    // --${id}-- ensures the list rerender even if the last item to add is
    // removes immediately after being added
    onDeleteItem(`--${id}--`);
  };

  return (
    <ul className="todo-list">
      {todoListItems.map((item) => (
        <li key={item.id} className="todo-item">
          <input type="checkbox" className="checkbox" />
          <p>{item.item}</p>
          <FaTrash
            onClick={deleteItemHandler}
            className="trash-icon"
            data-id={item.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

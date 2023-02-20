import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoList(props) {
  const { todoListItems } = props;
  return (
    <ul className="todo-list">
      {todoListItems.map((item) => (
        <li key={item.id} className="todo-item">
          <input type="checkbox" className="checkbox" />
          {item.item}
          <FaTrash className="trash-icon" />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

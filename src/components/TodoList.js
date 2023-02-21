import React from "react";
import {
  FaRegCheckCircle,
  FaEdit,
  FaTrash,
  FaWindowClose,
} from "react-icons/fa";

const getItems = () => JSON.parse(localStorage.getItem("todoItems")) || [];

const updateItemLocalStorage = (items, id, value) => {
  const itemsArr = [...items];
  const indexOfItemToUpdate = items.findIndex((item) => item.id === id);
  if (indexOfItemToUpdate === -1) return;
  const itemToUpdate = items[indexOfItemToUpdate];
  if (itemToUpdate.item === value) return;

  // Updated the todo
  itemToUpdate.item = value;
  itemsArr[indexOfItemToUpdate] = itemToUpdate;

  // Update local storage
  localStorage.setItem("todoItems", JSON.stringify(items));
};

function TodoList(props) {
  const { todoListItems, onDeleteItem } = props;

  const deleteItemHandler = (e) => {
    const deleteButton = e.target.closest(".delete-button");
    if (!deleteButton) return;
    const { id } = deleteButton.closest(".todo-item").dataset;

    const items = getItems();
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));
    // --${id}-- ensures the list rerender even if the last item to add is
    // removes immediately after being added
    onDeleteItem(`--${id}--`);
  };

  const editItemButtonsHandler = (e) => {
    const editButton = e.target.closest(".edit-button");
    if (!editButton) return;
    const todoMarkup = editButton.closest(".todo-item");
    const { id } = todoMarkup.dataset;

    // console.log("JUST CH ECKING...", e.target.closest(".edit-icon"));
    const approveButton = todoMarkup.querySelector(".approve-button");
    const closeButton = todoMarkup.querySelector(".close-button");

    const openEditMode = () => {
      editButton.style.display = "none";
      approveButton.style.display = "inline-block";
      closeButton.style.display = "inline-block";
      todoMarkup.querySelector(".todo-input").focus();
    };

    const closeEditMode = () => {
      approveButton.style.display = "none";
      closeButton.style.display = "none";
      editButton.style.display = "inline-block";
    };
    openEditMode();

    closeButton.addEventListener("click", () => {
      closeEditMode();
    });

    const items = getItems();
    const todoInput = todoMarkup.querySelector(".todo-input");
    const { value } = todoInput;

    approveButton.addEventListener("click", () => {
      updateItemLocalStorage(items, id, value);
      closeEditMode();
    });
  };

  const updateInputHandler = (e) => {
    const items = getItems();
    const { value } = e.target;
    const todoMarkup = e.target.closest(".todo-item");
    const { id } = todoMarkup.dataset;

    updateItemLocalStorage(items, id, value);
  };

  return (
    <ul className="todo-list">
      {todoListItems.map((item) => (
        <li key={item.id} className="todo-item" data-id={item.id}>
          <input type="checkbox" className="checkbox" />
          <input
            type="text"
            defaultValue={item.item}
            onBlur={updateInputHandler}
            className="todo-input"
          />
          <button type="button" className="approve-button">
            <FaRegCheckCircle className="approve-icon icon" />
          </button>
          <button type="button" className="close-button">
            <FaWindowClose className="close-icon icon" />
          </button>
          <button
            type="button"
            onClick={editItemButtonsHandler}
            className="edit-button"
          >
            <FaEdit className="edit-icon icon" />
          </button>

          <button
            type="button"
            onClick={deleteItemHandler}
            className="delete-button"
          >
            <FaTrash className="delete-icon icon" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

import { useEffect, useState } from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";
import TodoList from "../components/TodoList";

const initialList = () => JSON.parse(localStorage.getItem("todoItems")) || [];

function HomePage() {
  const [todoList, setTodoList] = useState(initialList());
  const [reRender, setReRender] = useState("initial");
  const reRenderHandler = (render) => {
    setReRender(render);
  };

  // Render on mount
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    setTodoList(storedTodoList);
  }, [reRender]);

  return (
    <main>
      <div className="home-container row">
        <Hero
          title="todos."
          description="Items will persist in the browser local storage"
        />
        <Form onAddItem={reRenderHandler} />
        <TodoList todoListItems={todoList} onDeleteItem={reRenderHandler} />
      </div>
    </main>
  );
}

export default HomePage;

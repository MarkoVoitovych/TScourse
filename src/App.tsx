import { FC, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import TodoList from "./compoments/TodoList";
import AddTodo from "./compoments/AddTodo";

import { IItems } from "./types/todo";

const App: FC = () => {
  const [todos, setTodos] = useState<IItems[]>([]);

  function todoAddHandler(todo: IItems) {
    setTodos((prev) => [
      ...prev,
      { id: Math.random().toString(), title: todo.title },
    ]);
  }

  function todoRemoveHandler(id: string): void {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <BrowserRouter>
      <div>
        <TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
        <AddTodo onAddTodo={todoAddHandler} />
      </div>
    </BrowserRouter>
  );
};

export default App;

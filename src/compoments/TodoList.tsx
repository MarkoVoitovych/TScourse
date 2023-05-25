import React from "react";

import { IItems } from "../types/todo";

export interface IProps {
  todos: IItems[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.title}</p>
            <button type="button" onClick={() => props.onRemoveTodo(item.id)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

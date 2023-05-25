import { ChangeEvent, FC, FormEvent, useState } from "react";

import { IItems } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItems) => void;
}

type OnlyTitle = Pick<IItems, "title">;

const AddTodo: FC<IProps> = (props) => {
  const [todo, setTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: ChangeEvent<HTMLInputElement>) {
    setTodo({
      title: e.target.value,
    });
  }
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItems);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <span>Add Title</span>
          <input type="text" id="add-todo" onChange={titleHandler} />
        </div>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

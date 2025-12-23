import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.length === 0 && <p>No todos yet</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoId={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;

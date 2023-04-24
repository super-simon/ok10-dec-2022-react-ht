import { useEffect, useState } from "react";
import IToDo from "../../interfaces/todo.interface";
import { todoService } from "../../services/todo.service";
import Todo from "../../components/Todo/Todo";
import "./ToDos.css";

export default function ToDos() {
  const [todos, setTodos] = useState<IToDo[]>([]);

  useEffect(() => {
    todoService
      .getAll()
      .then((response) => response.data)
      .then((todos) => setTodos(todos));
  }, []);

  console.log(todos);
  return (
    <>
      <h1>TODOs</h1>
      <ul className="todo__list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo__item">
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

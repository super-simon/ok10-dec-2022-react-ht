import IToDo from "../../interfaces/todo.interface";

interface IProps {
  todo: IToDo;
}

export default function Todo({
  todo: { id, userId, title, completed },
}: IProps) {
  return (
    <div className="todo">
      <div>id: {id}</div>
      <div>userId: {userId}</div>
      <div>completed: {completed ? "Yes" : "No"}</div>
      <div>{title}</div>
    </div>
  );
}

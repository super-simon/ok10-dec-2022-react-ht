import { Link } from "react-router-dom";

interface IProps {
  item: {
    id: number;
    name: string;
  };
}

export default function User({ item }: IProps) {
  const { id, name } = item;
  return (
    <div>
      {id} - {name}{" "}
      <Link to={id.toString()} state={{ ...item }}>
        Details
      </Link>
    </div>
  );
}

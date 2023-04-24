import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <ul className="menu__list">
      <li className="menu__item">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="menu__item">
        <Link to="/todos">ToDos</Link>
      </li>
      <li className="menu__item">
        <Link to="/albums">Albums</Link>
      </li>
      <li className="menu__item">
        <Link to="/comments">Comments</Link>
      </li>
    </ul>
  );
}

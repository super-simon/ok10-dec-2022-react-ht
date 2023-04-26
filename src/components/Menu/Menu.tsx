import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <ul className="menu__list">
      <li className="menu__item">
        <Link to={"/"}>Posts</Link>
      </li>
      <li className="menu__item">
        <Link to="/comments">Comments</Link>
      </li>
      <li className="menu__item">
        <Link to="/cats-dogs">Cats & Dogs</Link>
      </li>
    </ul>
  );
}

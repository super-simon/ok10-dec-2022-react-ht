import "./Menu.css";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <a href="#posts">Posts</a>
      </li>
      <li>
        <a href="#launches">Starship Launches</a>
      </li>
      <li>
        <a href="#users">Users</a>
      </li>
    </ul>
  );
}

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      Layout
      <h3>Submenu</h3>
      <ol>
        <li>
          <Link to={"users"}>Users Page</Link>
        </li>
        <li>
          <Link to={"posts"}>All Posts</Link>
        </li>
        <li>
          <Link to={"comments"}>All Comments</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
}

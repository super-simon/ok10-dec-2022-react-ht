import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div>
      <div>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/layout">Layout</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Content</h2>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/layout"} element={<Layout />}>
            <Route path={"users"} element={<Users />}>
              <Route path={":id"} element={<UserDetails />} />
            </Route>
            <Route path={"posts"} element={<Posts />}>
              <Route path={":id"} element={<PostDetails />} />
            </Route>
            <Route path={"comments"} element={<Comments />} />
          </Route>
          <Route path={"/about"} element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

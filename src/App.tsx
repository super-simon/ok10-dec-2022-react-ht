import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ToDos from "./pages/ToDos/ToDos";
import Albums from "./pages/Albums/Albums";
import Menu from "./components/Menu/Menu";
import Comments from "./pages/Comments/Comments";
import CommentsPost from "./pages/CommentsPost/CommentsPost";

function App() {
  return (
    <div className="container">
      <header>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/todos"} element={<ToDos />} />
          <Route path={"/albums"} element={<Albums />} />
          <Route path={"/comments"} element={<Comments />}>
            <Route path="post/:id" element={<CommentsPost />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

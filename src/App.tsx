import { useEffect, useState } from "react";
import "./App.css";
import postInterface from "./interfaces/post.interface";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState<postInterface[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
      res.json().then(function (data: postInterface[]) {
        setPosts(data);
      });
    });
  }, []);

  return (
    <div className="App">
      <Posts data={posts} id="posts" />
    </div>
  );
}

export default App;

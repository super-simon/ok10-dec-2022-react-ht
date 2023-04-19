import { useEffect, useState } from "react";
import "./App.css";
import postInterface from "./interfaces/post.interface";
import Posts from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";
import launchInterface from "./interfaces/launch.interface";
import userInterface from "./interfaces/user.interface";
import Users from "./components/Users/Users";
import Menu from "./components/Menu/Menu";

function App() {
  const [posts, setPosts] = useState<postInterface[]>([]);
  const [launches, setLaunches] = useState<launchInterface[]>([]);
  const [users, setUsers] = useState<userInterface[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
      res.json().then(function (data: postInterface[]) {
        setPosts(data);
      });
    });

    fetch("https://api.spacexdata.com/v3/launches/").then(function (res) {
      res.json().then(function (data: launchInterface[]) {
        data = data.filter((item) => item.launch_year != "2020");
        setLaunches(data);
      });
    });

    fetch("https://jsonplaceholder.typicode.com/users").then(function (res) {
      res.json().then(function (data: userInterface[]) {
        console.log(data);
        setUsers(data);
      });
    });
  }, []);

  return (
    <div className="App">
      <Menu />
      <Posts data={posts} id="posts" />
      <Launches data={launches} id="launches" />
      <Users data={users} id="users" />
    </div>
  );
}

export default App;

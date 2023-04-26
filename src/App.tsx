import { Component } from "react";
import Posts from "./pages/Posts/Posts";
import Comments from "./pages/Comments/Comments";
import { Link, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import CatsAndDogs from "./pages/CatsAndDogs/CatsAndDogs";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <header className="container">
          <Menu />
        </header>
        <main className="container">
          <Routes>
            <Route path={"/"} element={<Posts />} />
            <Route path={"/comments"} element={<Comments />} />
            <Route path={"/cats-dogs"} element={<CatsAndDogs />} />
          </Routes>
        </main>
      </>
    );
  }
}

import Cars from "./components/Cars/Cars";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Cars />
      <Users />
    </div>
  );
}

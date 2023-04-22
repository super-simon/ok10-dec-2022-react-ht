import Cars from "./components/Cars";
import "./App.css";
import Menu from "./components/Menu/Menu";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Cars />
    </div>
  );
}

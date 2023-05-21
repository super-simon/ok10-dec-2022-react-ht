import "./App.css";
import { MainLayout } from "./layouts";
import { Navigate, Route, Routes } from "react-router-dom";
import { CharacterPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"characters"} />} />
        <Route path={"characters"} element={<CharacterPage />} />
      </Route>
    </Routes>
  );
}

export default App;

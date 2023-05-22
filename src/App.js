import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import { CarPage } from "./pages";
import { MainLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"cars"} />} />
        <Route path={"cars"} element={<CarPage />} />
      </Route>
    </Routes>
  );
}

export default App;

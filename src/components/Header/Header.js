import { useNavigate } from "react-router";
import css from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={css.Header}>
      <button onClick={() => navigate("users")}>Users</button>
    </div>
  );
};

export default Header;

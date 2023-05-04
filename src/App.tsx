import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const store = useSelector((state) => state);
  console.log(store);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC", payload: 2 });
  };

  const decrement = () => {
    dispatch({ type: "DEC", payload: 2 });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>{store as number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

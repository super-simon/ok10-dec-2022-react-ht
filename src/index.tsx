import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Reducer, createStore } from "redux";

const baseReducer: Reducer<number, any> = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(baseReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

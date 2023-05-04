import { useDispatch } from "react-redux";
import { count1Actions } from "../redux/slices";

const ComponentOne = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(count1Actions.inc())}>Increment</button>
      <button onClick={() => dispatch(count1Actions.dec())}>Decrement</button>
      <button onClick={() => dispatch(count1Actions.res())}>Reset</button>
    </div>
  );
};

export { ComponentOne };

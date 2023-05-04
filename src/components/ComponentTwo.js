import { useDispatch } from "react-redux";
import { count2Actions } from "../redux/slices";

const ComponentTwo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(count2Actions.inc())}>Increment</button>
      <button onClick={() => dispatch(count2Actions.dec())}>Decrement</button>
      <button onClick={() => dispatch(count2Actions.res(100))}>Reset</button>
    </div>
  );
};

export { ComponentTwo };

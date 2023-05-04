import { useSelector } from "react-redux";

const Header = () => {
  const { count1 } = useSelector((state) => state.count1);
  return (
    <div>
      <div>Count1: {count1}</div>
    </div>
  );
};

export { Header };

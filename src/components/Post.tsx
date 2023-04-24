import { useNavigate } from "react-router-dom";

export default function Post({ item }: { item: any }) {
  const { title } = item;
  const navigator = useNavigate();
  return (
    <div>
      {title}
      <button
        onClick={() => {
          navigator(item.id.toString());
        }}
      >
        Details
      </button>
    </div>
  );
}

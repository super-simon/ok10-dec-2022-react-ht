import userInterface from "../../interfaces/user.interface";
import "./User.css";

export default function User({
  user,
  changeUser,
}: {
  user: userInterface;
  changeUser: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <>
      <img
        className="user__img"
        src={`https://i.pravatar.cc/300?img=${user.id}`}
        alt={user.name}
      />
      <span className="user__name">{user.name}</span>
      <button className="user__button" onClick={changeUser} data-id={user.id}>
        Show Posts
      </button>
    </>
  );
}

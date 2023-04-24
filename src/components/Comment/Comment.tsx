import { Link } from "react-router-dom";
import IComment from "../../interfaces/comment.interface";

interface IProps {
  comment: IComment;
}

export default function Comment({
  comment: { id, postId, name, email, body },
}: IProps) {
  return (
    <div className="comment">
      <div>id: {id}</div>
      <div>
        postId: <Link to={`post/${postId}`}>{postId}</Link>
      </div>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>{body}</div>
    </div>
  );
}

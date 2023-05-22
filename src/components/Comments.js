import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentService } from "../services";
import { commentActions } from "../redux";
import { Comment } from "./Comment";

const Comments = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    commentService
      .getAll()
      .then((value) => value.data)
      .then((value) => dispatch(commentActions.setAll(value)));
  }, [dispatch]);
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export { Comments };

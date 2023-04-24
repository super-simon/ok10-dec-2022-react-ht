import { useEffect, useState } from "react";
import "./Comments.css";
import IComment from "../../interfaces/comment.interface";
import { commentService } from "../../services/comment.service";
import Comment from "../../components/Comment/Comment";
import { Outlet } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    commentService
      .getAll()
      .then((res) => res.data)
      .then((comments) => setComments(comments));
  }, []);
  return (
    <>
      <h1>Comments</h1>
      <Outlet />
      <ul className="comment__list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </>
  );
}

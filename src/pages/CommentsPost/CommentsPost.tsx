import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IPost from "../../interfaces/post.interface";
import { postService } from "../../services/post.service";
import "./CommentsPost.css";

export default function CommentsPost() {
  const [post, setPost] = useState<IPost>();
  const { id: postId } = useParams();

  useEffect(() => {
    postService
      .getById(+postId!)
      .then((res) => res.data)
      .then((post) => setPost(post));
  }, [postId]);

  return (
    <>
      {post && (
        <div className="post">
          <h2 className="post__title">{post.title}</h2>
          <div>{post.body}</div>
        </div>
      )}
    </>
  );
}

import postInterface from "../../interfaces/post.interface";
import "./UserPost.css";

export default function UserPost({ post }: { post: postInterface }) {
  return (
    <>
      <img
        className="user-post__img"
        src={`https://picsum.photos/id/${10 + post.id}/300`}
        alt={post.title}
      />
      <span className="user-post__title">{post.title}</span>
      <span className="user-post__body">{post.body}</span>
    </>
  );
}

import { useState } from "react";
import postInterface from "../../interfaces/post.interface";
import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({
  data,
  id,
}: {
  data: postInterface[];
  id: string;
}) {
  const [selectedPostBody, setSelectedPostBody] = useState<string | null>("");

  const selectPost = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setSelectedPostBody((e.target as HTMLElement).getAttribute("data-body"));
  };

  return (
    <>
      <h2 id={id}>Selected Post</h2>
      <div className="selectedPost__body">{selectedPostBody}</div>
      <h2>Posts</h2>
      <ul className="post__container">
        {data.map((post) => (
          <li key={post.id} className="post">
            <Post selectPost={selectPost} post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}

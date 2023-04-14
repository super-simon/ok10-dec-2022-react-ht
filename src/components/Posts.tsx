import { useState } from "react";
import postInterface from "../interfaces/post.interface";

export default function Posts({ data }: { data: postInterface[] }) {
  const [selectedPostBody, setSelectedPostBody] = useState<string>("");

  const selectPost = (body: string) => setSelectedPostBody(body);

  return (
    <>
      <h2>Selected Post</h2>
      <div className="selectedPost__body">{selectedPostBody}</div>
      <h2>Posts</h2>
      <ul className="post__container">
        {data.map((post) => (
          <li key={post.id} className="post">
            <span onClick={selectPost} className="post__title">
              {post.title}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

import { useEffect, useState } from "react";
import ApiService from "../services/api.services";
import Post from "../components/Post";
import { Outlet } from "react-router-dom";

export default function Posts() {
  let apiService = new (ApiService as any)("posts");
  let [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    apiService.getAllData().then((value: any[]) => setPosts(value));
  });
  return (
    <div>
      <Outlet />
      {posts.map((post) => (
        <Post key={post.id} item={post} />
      ))}
    </div>
  );
}

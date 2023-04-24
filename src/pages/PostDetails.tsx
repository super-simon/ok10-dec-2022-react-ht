import { useEffect, useState } from "react";
import ApiService from "../services/api.services";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const [post, setPost] = useState<any>();
  const { id } = useParams();

  let apiService = new (ApiService as any)("posts");
  useEffect(() => {
    apiService.getSingleData(id).then((value: any) => setPost(value));
  }, [id]);

  return <div>{JSON.stringify(post)}</div>;
}

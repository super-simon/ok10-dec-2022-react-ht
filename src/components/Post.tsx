import postInterface from "../interfaces/post.interface";

interface PostPropsInterface {
  post: postInterface;
  selectPost: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function Post({ post, selectPost }: PostPropsInterface) {
  return (
    <span onClick={selectPost} className="post__title" data-body={post.body}>
      {post.title}
    </span>
  );
}

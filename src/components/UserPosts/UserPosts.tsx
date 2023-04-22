import "./UserPosts.css";
import UserPost from "../UserPost/UserPost";
import IPost from "../../interfaces/post.interface";
import { FC } from "react";

interface IProps {
  selectedUserPosts: IPost[];
}

const UsersPosts: FC<IProps> = ({ selectedUserPosts }) => {
  return (
    <>
      <h2>Seleted User Posts</h2>
      <ul className="user-post__container">
        {selectedUserPosts.map((post) => (
          <li className="user-post" key={post.id}>
            <UserPost post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPosts;

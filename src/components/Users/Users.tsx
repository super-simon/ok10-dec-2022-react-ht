import { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import UserPost from "../UserPost/UserPost";
import IPost from "../../interfaces/post.interface";
import { postService } from "../../services/post.service";
import IUser from "../../interfaces/user.interface";
import { userService } from "../../services/user.service";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUserPosts, setSelectedUserPosts] = useState<IPost[]>([]);

  const changeUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedUserId = (e.target as HTMLElement).getAttribute("data-id");
    console.log(selectedUserId);
    if (selectedUserId) {
      postService
        .getByUserId(selectedUserId)
        .then((response) => response.data)
        .then((data) => setSelectedUserPosts(data));
    }
  };

  useEffect(() => {
    userService
      .getAll()
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h2 id="users">Users</h2>
      <ul className="user__container">
        {users.map((user) => (
          <li key={user.id} className="user">
            <User user={user} changeUser={changeUser} />
          </li>
        ))}
      </ul>
      {selectedUserPosts.length > 0 && (
        <div>
          <h2>Seleted User Posts</h2>
          <ul className="user-post__container">
            {selectedUserPosts.map((post) => (
              <li className="user-post" key={post.id}>
                <UserPost post={post} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

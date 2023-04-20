import { useState } from "react";
import launchInterface from "../../interfaces/user.interface";
import User from "../User/User";
import "./Users.css";
import postInterface from "../../interfaces/post.interface";
import { postService } from "../../services/post.service";
import UserPost from "../UserPost/UserPost";

export default function Users({
  data,
  id,
}: {
  data: launchInterface[];
  id: string;
}) {
  const [selectedUserPosts, setSelectedUserPosts] = useState<postInterface[]>(
    []
  );

  const changeUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedUserId = (e.target as HTMLElement).getAttribute("data-id");
    console.log(selectedUserId);
    if (selectedUserId) {
      console.log(selectedUserId);
      postService.getByUserId(+selectedUserId).then(function (res) {
        res.json().then(function (data: postInterface[]) {
          console.log(data);
          setSelectedUserPosts(data);
        });
      });
    }
  };

  return (
    <>
      <h2 id={id}>Users</h2>
      <ul className="user__container">
        {data.map((user) => (
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

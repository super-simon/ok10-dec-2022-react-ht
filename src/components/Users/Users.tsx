import { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import UserPost from "../UserPost/UserPost";
import IPost from "../../interfaces/post.interface";
import { postService } from "../../services/post.service";
import IUser from "../../interfaces/user.interface";
import { userService } from "../../services/user.service";
import { FaPlusSquare } from "react-icons/fa";
import Modal from "../Modal/Modal";
import UserForm from "../UserForm/UserForm";
import UsersPosts from "../UserPosts/UserPosts";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reloadUsersTrigger, setReloadUsersTrigger] = useState<boolean>(true);
  const [selectedUserPosts, setSelectedUserPosts] = useState<IPost[]>([]);
  const [showUserForm, setShowUserForm] = useState<boolean>(false);
  const [showSuccessUserCreationNotice, setShowSuccessUserCreationNotice] =
    useState<boolean>(false);

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
    setSelectedUserPosts([]);
  }, [reloadUsersTrigger]);

  const onUserCreateSuccess = () => {
    setReloadUsersTrigger((value) => !value);
    setShowUserForm(false);
    setShowSuccessUserCreationNotice(true);
  };

  return (
    <>
      <h2 id="users">Users</h2>
      <FaPlusSquare onClick={() => setShowUserForm(true)} />

      {showUserForm && (
        <Modal handleClose={() => setShowUserForm(false)}>
          <UserForm onSuccess={onUserCreateSuccess} />
        </Modal>
      )}

      {showSuccessUserCreationNotice && (
        <Modal handleClose={() => setShowSuccessUserCreationNotice(false)}>
          User Created Successfully
          </Modal>
      )}

      <ul className="user__container">
        {users.map((user) => (
          <li key={user.id} className="user">
            <User user={user} changeUser={changeUser} />
          </li>
        ))}
      </ul>

      {selectedUserPosts.length > 0 && (
        <section>
          <UsersPosts selectedUserPosts={selectedUserPosts} />
        </section>
      )}
    </>
  );
}

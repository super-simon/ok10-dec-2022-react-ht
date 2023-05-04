import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { addUser } from "../store";

const Users = () => {
  const { users } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();

    const user = {
      id: new Date().getTime(),
      name: e.target.userName.value,
    };

    dispatch(addUser({ user }));
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="name" name="userName" />
        <button>Save</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;

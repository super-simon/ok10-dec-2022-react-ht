import { useEffect, useState } from "react";
import ApiService from "../services/api.services";
import User from "../components/User";
import { Outlet, Route } from "react-router-dom";
  
export default function Users() {
  let apiService = new (ApiService as any)("users");
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    apiService.getAllData().then((value: any) => setUsers(value));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User item={user} key={user.id} />
      ))}
      <hr />
      <div>
        <h3>Details</h3>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

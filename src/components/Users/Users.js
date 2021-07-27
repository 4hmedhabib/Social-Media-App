import User from "./User/User";
import usersData from "../../data/users";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const reverseData = usersData.sort().reverse();
    setUsers(reverseData);
  }, []);

  return (
    <div>
      <div className="card bg-white  p-2">
        <div className="card-header bg-white rounded-5">
          <h5 className="card-title p-0 m-0">
            <i className="fa fa-users"></i> Top Users
          </h5>
        </div>
      </div>
      {users &&
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
};

export default Users;

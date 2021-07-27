import User from "./User/User";

const Users = () => {
  return (
    <div>
      <div className="card bg-white  p-2">
        <div className="card-header bg-white rounded-5">
          <h5 className="card-title p-0 m-0">
            <i className="fa fa-users"></i> Top Users
          </h5>
        </div>
      </div>
      <User />
    </div>
  );
};

export default Users;

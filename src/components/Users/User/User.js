import moment from "moment";
import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  return (
    <div>
      <div className="card my-3">
        <div className="card-body">
          <div className="job-card__content">
            <div className="job-card_img">
              <img
                src={"https://reqres.in/img/faces/" + user.id + "-image.jpg"}
                alt="username"
              />
            </div>
            <div className="job-card_info">
              <span className="text-muted">
                <Link
                  to={"/" + user.username}
                  className="job-card_company text-decoration-none"
                >
                  {user.username}
                </Link>
                <span className="float-end d-md-block d-none">
                  <i className="text-danger fa fa-heart-o"></i>
                </span>
              </span>
              <h6 className="card-title">{user.name}</h6>
              <span className="text-muted">
                Joined {moment(user.joinedAt).toNow()} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

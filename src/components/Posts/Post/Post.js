import "./Post.css";
import Moment from "moment";
import { Link } from "react-router-dom";

const Post = ({ post, user }) => {
  return (
    <div>
      <div className="mb-3">
        <div className="card">
          <div className="d-flex justify-content-between p-2 px-3">
            <div className="d-flex flex-row align-items-center">
              <img
                src={"https://reqres.in/img/faces/" + user.id + "-image.jpg"}
                width="50"
                className="rounded-circle"
                alt=""
              />
              <div className="d-flex flex-column ms-2">
                <span className="font-weight-bold">{user.name}</span>{" "}
                <small className="text-primary">{user.username}</small>{" "}
              </div>
            </div>
            <div className="d-flex flex-row mt-1 ellipsis">
              {" "}
              <small className="me-2">
                <span> Posted At </span>
                {Moment(post.createdAt).format("DD/MM/YYYY HH:mm a")}
              </small>{" "}
              <Link
                to={"/posts/" + post.id}
                className="text-decoration-none text-dark"
              >
                <i className="fa fa-ellipsis-h"></i>
              </Link>{" "}
            </div>
          </div>{" "}
          <img src={post.img} className="img-fluid" alt="" />
          <div className="p-2">
            <p className="text-justify">{post.body}</p>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row icons d-flex align-items-center">
                {" "}
                <i className="fa fa-heart"></i>{" "}
                <i className="fa fa-smile-o ms-2"></i>{" "}
              </div>
              <div className="d-flex flex-row muted-color">
                {" "}
                <span>2 comments</span>{" "}
                <Link
                  to={"/posts/" + post.id}
                  className="ms-2 text-decoration-none "
                >
                  View Post
                </Link>{" "}
              </div>
            </div>
            <hr />
            <div className="comments">
              <div className="d-flex flex-row mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/9AZ2QX1.jpg"
                  width="40"
                  className="rounded-image"
                  alt=""
                />
                <div className="d-flex flex-column ms-2">
                  {" "}
                  <span className="name">Daniel Frozer</span>{" "}
                  <small className="comment-text">
                    I like this alot! thanks alot
                  </small>
                  <div className="d-flex flex-row align-items-center status">
                    {" "}
                    <small>Like</small> <small>Reply</small>{" "}
                    <small>Translate</small> <small>18 mins</small>{" "}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/1YrCKa1.jpg"
                  width="40"
                  className="rounded-image"
                  alt=""
                />
                <div className="d-flex flex-column ms-2">
                  {" "}
                  <span className="name">Elizabeth goodmen</span>{" "}
                  <small className="comment-text">Thanks for sharing!</small>
                  <div className="d-flex flex-row align-items-center status">
                    {" "}
                    <small>Like</small> <small>Reply</small>{" "}
                    <small>Translate</small> <small>8 mins</small>{" "}
                  </div>
                </div>
              </div>
              <div className="comment-input">
                {" "}
                <input type="text" className="form-control" />
                <div className="fonts">
                  {" "}
                  <i className="fa fa-camera"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

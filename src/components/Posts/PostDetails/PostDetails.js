import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import posts from "../../../data/posts";
import users from "../../../data/users";
import User from "../../Users/User/User";
import PostDetail from "./PostDetail/PostDetail";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const id = Math.floor(postId);
    posts
      .filter((post) => {
        return post.id === id;
      })
      .map((post) => setPost(post));
    users
      .filter((user) => user.id === post.userId)
      .map((user) => setUser(user));
  }, [postId, user, setUser, post, setPost]);

  return (
    <div>
      <div className="container-lg my-3">
        <div className="">
          <div className="row d-flex flex-column-reverse flex-md-row justify-content-center">
            <div className="col-lg-6 col-md-6 offset-md-0 col-sm-10 offset-sm-1  col-12">
              <PostDetail user={user} post={post} />
            </div>
            <div className="col-lg-5 col-md-5 offset-md-0 col-sm-10 offset-sm-1 col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Post Details</h5>
                </div>
                <div className="card-body mb-0 pb-0">
                  <p className="card-title">
                    Date Posted :{" "}
                    <span className="fw-bold">
                      {moment(post.createdAt).format("MMMM Do YYYY")}
                    </span>
                  </p>
                  <div className="card-title">
                    Time Posted :{" "}
                    <span className="fw-bold">
                      {moment(post.createdAt).format("hh:mm a")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header">
                  <h5 className="card-title">Post Owner</h5>
                </div>

                <User user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

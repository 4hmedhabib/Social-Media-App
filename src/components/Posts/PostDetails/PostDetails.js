import { useEffect, useState } from "react";
import { useParams } from "react-router";
import posts from "../../../data/posts";
import users from "../../../data/users";
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
        <div className="row">
          <div className="col-md-6 col-sm-7 col-12">
            <PostDetail user={user} post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

import { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";
import postsData from "../../data/posts";
import usersData from "../../data/users";

const Posts = () => {
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    setUsers(usersData);
    setPosts(postsData);
  }, []);

  return (
    <>
      {posts &&
        posts.map((post, i) => {
          const userId = users && users.filter((u) => u.id === post.userId);
          return <Post post={post} key={post.id} user={userId[0]} />;
        })}
    </>
  );
};

export default Posts;

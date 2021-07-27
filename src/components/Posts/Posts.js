import { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";

const Posts = () => {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
      setUser(res.data);
    });

    Axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post, i) => {
          const userId = user && user.filter((u) => u.id === post.userId);
          return <Post post={post} key={post.id} user={userId[0]} />;
        })}
    </>
  );
};

export default Posts;

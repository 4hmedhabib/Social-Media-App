import { useEffect, useState } from "react";
import Post from "./Post/Post";
import postsData from "../../data/posts";
import usersData from "../../data/users";
import moment from "moment";

const Posts = () => {
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const reverseData = postsData.sort(function (a, b) {
      return moment(b.createdAt) - moment(a.createdAt);
    });
    setUsers(usersData);
    setPosts(postsData);
  }, []);

  console.log(posts);

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

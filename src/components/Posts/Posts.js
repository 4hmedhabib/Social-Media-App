import { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";

const Posts = () => {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState("");

  // const posts = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   },
  //   {
  //     userId: 2,
  //     id: 12,
  //     title: "in quibusdam tempore odit est dolorem",
  //     body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  //   },
  //   {
  //     userId: 3,
  //     id: 24,
  //     title: "autem hic labore sunt dolores incidunt",
  //     body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  //   },
  // ];

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

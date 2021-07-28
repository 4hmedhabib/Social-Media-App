import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Home, CreatePost, PostDetails } from "./components";
import posts from "./data/posts";
import users from "./data/users";

const App = () => {
  const [createPost, setCreatePost] = useState("");

  let genId = [];

  useEffect(() => {
    posts.filter((post) => {
      const numId = Math.floor(Math.random() * 100);

      if (post.id !== numId) {
        genId.push(numId);
      }
      return numId;
    });
  });

  const userId = Math.floor(Math.random() * 10) + 1;
  console.log(userId);

  const handlerPost = (e) => {
    setCreatePost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      userId: userId,
      id: genId[0],
      title: "et ea vero quia laudantium autem",
    }));
  };
  return (
    <>
      <Router>
        <div className="d-flex flex-column justify-content-between vh-100">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreatePost handlerPost={handlerPost} create={createPost} />
            </Route>
            <Route path="/posts/:postId">
              <PostDetails />
            </Route>
            <Route path="*">
              <div className="container text-center">
                <div className="row my-5">
                  <h1>404 PAGE NOT FOUND</h1>
                </div>
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

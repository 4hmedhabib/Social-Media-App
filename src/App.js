import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Home, CreatePost } from "./components";
import posts from "./data/posts";
import users from "./data/users";

const App = () => {
  const [createPost, setCreatePost] = useState("");

  let genId = [];
  let userId = [];

  useEffect(() => {
    posts.filter((post) => {
      const numId = Math.floor(Math.random() * 100);

      if (post.id !== numId) {
        console.log("isma leeka", numId);
        genId.push(numId);
      }
      return numId;
    });
    users.filter((user) => {
      const numId = Math.floor(Math.random() * 10);
      if (user.id === numId) {
        console.log("user is : ", numId);
        userId.push(numId);
      }
      return numId;
    });

    console.log("your result :", userId, genId);
  });

  const handlerPost = (e) => {
    setCreatePost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      userId: userId[0],
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
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

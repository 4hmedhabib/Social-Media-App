import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import posts from "../../../data/posts";

const CreatePost = ({ handlerPost, create }) => {
  let history = useHistory();
  const submitPost = (e) => {
    e.preventDefault();
    console.log(create);
    posts.push(create);
    history.push("/");
  };
  return (
    <>
      <div className="container-md">
        <div className="row my-2">
          <div className="">
            <div className=" col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-12">
              <div className="card">
                <div className="card-header">
                  {" "}
                  <h1 className="display-5 lead">Create Post</h1>
                </div>
                <div className="card-body p-4 pt-0">
                  <div className=" my-3">
                    <form onSubmit={submitPost}>
                      <TextField
                        onChange={(e) => handlerPost(e)}
                        className="d-flex my-3"
                        id="title"
                        name="body"
                        label="Body"
                        required
                      />
                      <TextField
                        onChange={(e) => handlerPost(e)}
                        className="d-flex my-3"
                        id="title"
                        name="img"
                        label="Image Url"
                        type="text"
                        required
                      />
                      <Button variant="contained" color="primary" type="submit">
                        Create
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;

import "./Post.css";

const Post = ({ post, user }) => {
  return (
    <div>
      <div className="post">
        <div className="post-header">
          <div className="post-profile">
            <div className="profile-img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </div>
            <a className="profile-name text-decoration-none text-dark">
              {user && user.name}
            </a>
          </div>
          <div className="post-header-right">
            <button className="btn btn-sm border-0 btn-outline fw-bold d-flex justify-content-center align-items-center mb-3">
              <span className="h1">...</span>
            </button>
          </div>
        </div>
        <div className="post-body">
          <div className="post-desc">
            <p className="mb-1">{post.title}</p>
            <p className="lead mt-0">{post.body}</p>
          </div>
          <div className="post-img">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="post-comment">
            <div className="post-view">
              <label htmlFor="comment" className=" form-label">
                Comments
              </label>
              <button className="btn btn-sm border-0 text-dark">View</button>
            </div>
            <form action="">
              <input
                type="text"
                className="form-control"
                name="comment"
                id="comment"
                placeholder="Coment..."
              />
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

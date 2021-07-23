import "./Post.css";
const Post = ({ posts }) => {
  console.log(posts);
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
            <div className="profile-name">Sara Doe</div>
          </div>
          <div className="post-header-right">...</div>
        </div>
        <div className="post-body">
          <div className="post-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quas odit accusamus.
          </div>
          <div className="post-img">
            <img
              src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="post-comment">comment</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

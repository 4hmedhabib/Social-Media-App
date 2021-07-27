import "./User.css";
const User = () => {
  return (
    <div>
      <div class="card my-3">
        <div className="card-body">
          <div class="job-card__content">
            <div class="job-card_img">
              <img
                src="https://reqres.in/img/faces/9-image.jpg"
                alt="username"
              />
            </div>
            <div class="job-card_info">
              <span class="text-muted">
                <a href="#!" class="job-card_company text-decoration-none">
                  username
                </a>
                <a href="#!" class="float-end d-md-block d-none">
                  <i class="text-danger fa fa-heart-o "></i>
                </a>
              </span>
              <h6 className="card-title">Name is here</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

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
                alt="Company Logo"
              />
            </div>
            <div class="job-card_info">
              <h6 class="text-muted">
                <a href="#!" class="job-card_company text-decoration-none">
                  username
                </a>
                <a href="#!" class="float-end">
                  <i class="text-danger fa fa-heart-o"></i>
                </a>
              </h6>
              <h5 className="card-title">Name</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

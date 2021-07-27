import { Posts, Users } from "../";

const Home = () => {
  return (
    <>
      <div className="container-md my-4">
        <div className="row justify-content-between">
          <div className="col-12 col-xl-7 col-md-7 col-sm-7">
            <Posts />
          </div>
          <div className="col-12 col-xl-4 col-md-5 col-sm-5 d-sm-block d-none">
            <Users />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

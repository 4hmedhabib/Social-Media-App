import { Posts } from "../";

const Home = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-between">
          <div className="col-12 col-xl-7 col-md-7 col-sm-7">
            <Posts />
          </div>
          <div className="col-12 col-xl-4 col-md-4 col-sm-4 bg-secondary">
            <h1>Users</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

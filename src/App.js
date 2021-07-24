import { Navbar, Footer, Home } from "./components";

const App = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between vh-100">
        {/* <Navbar /> */}
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;

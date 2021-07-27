import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Home } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <div className="d-flex flex-column justify-content-between vh-100">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-dark">
              Social Media
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle area-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/create"
                className="text-decoration-none lead btn btn-primary mt-3 mt-sm-0"
              >
                Create Post
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

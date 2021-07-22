import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container justify-content-center align-items-center>
          <Navbar.Brand className="h3" href="/">
            Social Media
          </Navbar.Brand>
          <Navbar.Toggle area-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/create">Create Post</Nav.Link>
              <Nav.Link href="/profile">Current User</Nav.Link>
              <Nav.Link href="/users">All Users</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

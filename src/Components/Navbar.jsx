import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHome() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shopping cart</Nav.Link>
            <Nav.Link href="#pricing">My profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavbarHome;
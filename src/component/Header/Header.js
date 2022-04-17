import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import auth from '../../Service.fig';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'><img style={{width:"50px"}} src={logo} alt="No logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/about' >About me</Nav.Link>
      {user?<p>{user.email}<button onClick={logout}>Log out</button></p>:<Nav.Link eventKey={2} as={Link} to='/logIn'>
        Log In
      </Nav.Link>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
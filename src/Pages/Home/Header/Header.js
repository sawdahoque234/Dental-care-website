import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


import './Header.css'
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar id="hd2" fixed="top" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home" className="fst-italic fw-bolder text-white text-decoration-underline"><img src={logo} id="logo" alt="" /> DentalCare</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="ms-auto ">
            <Nav.Link as={HashLink} className="text-white fw-bolder " to="/home#">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>


            <Nav.Link as={HashLink} className="text-white fw-bolder " to="/about">About</Nav.Link>
            <Nav.Link as={HashLink} className="text-white fw-bolder " to="/contactus" >Contact us</Nav.Link>
            {user?.email ?
              <Button onClick={logout} variant="danger" className="mx-2">Logout</Button> :
              <Nav.Link as={HashLink} to="/login">Log in</Nav.Link>
            }
            {/* <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text> */}
          </Nav>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;
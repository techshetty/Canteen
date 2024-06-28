import React from 'react';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import canteenLogo from './canteen.png';
import '../styles/Nav.css';

const Navigation = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top" className="shadow-sm py-2">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={canteenLogo}
            alt="College Canteen Logo"
            className="logo-image"
          />
          <span className="brand-text ms-2">College Canteen</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-item mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-item mx-2">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item mx-2">Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/cart" className="nav-icon position-relative mx-2">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Dropdown align="end" className="mx-2">
              <Dropdown.Toggle variant="link" id="dropdown-notifications" className="nav-icon">
                <FontAwesomeIcon icon={faBell} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">New offer available!</Dropdown.Item>
                <Dropdown.Item href="#">Your order is ready</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">See all notifications</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown align="end" className="mx-2">
              <Dropdown.Toggle variant="link" id="dropdown-user" className="nav-icon">
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/orders">My Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button as={Link} to="/login" variant="primary" className="ms-3">
              <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
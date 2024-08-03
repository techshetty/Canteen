import React from 'react';
import { Navbar, Nav, Dropdown, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { useCart } from '../context/CartContext'; // Make sure to import useCart
import canteenLogo from './canteen.png';
import '../styles/Nav.css';

const Navigation = () => {
  const { cartItems } = useCart(); // Use the useCart hook to get the cart items

  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top" className="shadow-sm py-2">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={canteenLogo}
          alt="College Canteen Logo"
          className="logo-image"
        />
        <span className="brand-text ms-2">Sahyadri Cafe</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className="nav-item mx-2">Home</Nav.Link>
          <ScrollLink to="menu-section" smooth={true} duration={500} className="nav-item mx-2 nav-link">
            Menu
          </ScrollLink>
          <Nav.Link as={Link} to="/about" className="nav-item mx-2">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item mx-2">Contact</Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Nav.Link as={Link} to="/cart" className="nav-icon position-relative mx-2">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems.length > 0 && (
              <Badge pill bg="danger" className="cart-badge">
                {cartItems.length}
              </Badge>
            )}
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
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import '../styles/DishCard.css';

const DishCard = ({ id, name, description, price, rating, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
    toast.success('Added to cart!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-icon" />);
      } else if (i - rating < 1) {
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} className="star-icon" />);
      } else {
        stars.push(<FontAwesomeIcon icon={faStarEmpty} key={i} className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <Card className="dish-card h-100 shadow-sm">
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
        <div className="mt-auto">
          <div className="dish-info">
            <span className="price">₹{price.toFixed(2)}</span>
            <span className="rating">{renderStars(rating)}</span>
          </div>
          <Button variant="primary" className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DishCard;

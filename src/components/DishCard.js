import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/DishCard.css';

const DishCard = ({ name, description, price, rating, image }) => {
  return (
    <Card className="dish-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="dish-info">
          <span className="price">${price.toFixed(2)}</span>
          <span className="rating">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            {rating}
          </span>
        </div>
        <Button variant="primary" className="add-to-cart-btn">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
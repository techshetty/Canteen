import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
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

  return (
    <Card className="dish-card h-100 shadow-sm">
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
        <div className="mt-auto">
          <div className="dish-info">
            <span className="price">${price.toFixed(2)}</span>
            <span className="rating">Rating: {rating}/5</span>
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

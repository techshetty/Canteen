// src/components/DishCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

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
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="font-weight-bold">${price.toFixed(2)}</span>
            <span>Rating: {rating}/5</span>
          </div>
          <Button variant="primary" className="w-100 mt-2" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0)
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p className="empty-cart-message">Your cart is empty.</p>
      </div>
    );

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <Image src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>₹{item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <span className="quantity">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
              <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <h4>Total: ₹{total.toFixed(2)}</h4>
          <Button variant="primary" className="proceed-to-checkout">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
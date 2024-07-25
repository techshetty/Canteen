import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0)
    return (
      <div id="cart-page">
        <h2 id="cart-title">Your Cart</h2>
        <p id="empty-cart-message">Your cart is empty.</p>
      </div>
    );

  return (
    <div id="cart-page">
      <h2 id="cart-title">Your Cart</h2>
      <div id="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <Image src={item.image} alt={item.name} className="cart-item-image" />
            <div id="cart-item-details">
              <div id="cart-item-info">
                <h4 id="cart-item-name">{item.name}</h4>
                <p id="cart-item-price">₹{item.price.toFixed(2)}</p>
              </div>
              <div id="quantity-controls">
                <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <span id="quantity">{item.quantity}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
              <Button variant="danger" size="sm" id="remove-button" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>
      <div id="cart-summary">
        <h4>Cart Total</h4>
        <div id="summary-details">
          <p>Subtotal: ₹{total.toFixed(2)}</p>
          <p>Total: ₹{total.toFixed(2)}</p>
        </div>
        <Button variant="primary" id="proceed-to-checkout">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;

import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-table-header">
              <div className="cart-table-row">
                <div className="cart-table-header-cell">Item</div>
                <div className="cart-table-header-cell">Price</div>
                <div className="cart-table-header-cell">Quantity</div>
                <div className="cart-table-header-cell">Total</div>
                <div className="cart-table-header-cell">Action</div>
              </div>
            </div>
            <div className="cart-table-body">
              {cartItems.map((item) => (
                <div className="cart-table-row" key={item.id}>
                  <div className="cart-table-cell">{item.name}</div>
                  <div className="cart-table-cell">₹{item.price.toFixed(2)}</div>
                  <div className="cart-table-cell">
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </div>
                  <div className="cart-table-cell">₹{(item.price * item.quantity).toFixed(2)}</div>
                  <div className="cart-table-cell">
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h4 className="text-end">Total: ₹{total.toFixed(2)}</h4>
          <div className="text-end mt-3">
            <Button variant="primary">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

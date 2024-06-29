
// src/App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import { CartProvider } from './context/CartContext';
import './App.css'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector("#preloader");
      if (preloader) {
        preloader.style.display = "none";
        document.querySelector("html").style.overflow='auto';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div id="preloader"><div id="load"></div></div>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
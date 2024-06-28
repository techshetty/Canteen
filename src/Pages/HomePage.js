// src/components/HomePage.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import DishCard from '../components/DishCard';
import { Element } from 'react-scroll';
import '../styles/HomePage.css';

const featuredDishes = [
  { id: 1, name: 'Spicy Chicken Burger', image: 'https://marketplace.canva.com/EAGD_Pe9v3o/2/0/1600w/canva-red-collage-playful-korean-food-banner-6b1qXmcPvE0.jpg' },
  { id: 2, name: 'Veggie Supreme Pizza', image: 'https://via.placeholder.com/800x400' },
  { id: 3, name: 'Chocolate Brownie Sundae', image: 'https://via.placeholder.com/800x400' },
];

const menuItems = [
  { id: 1, name: 'Classic Burger', description: 'Juicy beef patty with fresh veggies', price: 8.99, rating: 4.5, image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Margherita Pizza', description: 'Traditional Italian pizza with tomato and mozzarella', price: 12.99, rating: 4.2, image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing', price: 7.99, rating: 4.0, image: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Chicken Wings', description: 'Spicy buffalo wings with blue cheese dip', price: 9.99, rating: 4.7, image: 'https://via.placeholder.com/300x200' },
  { id: 5, name: 'Pasta Alfredo', description: 'Creamy Alfredo sauce with fettuccine', price: 11.99, rating: 4.3, image: 'https://via.placeholder.com/300x200' },
  { id: 6, name: 'Fish and Chips', description: 'Crispy battered fish with golden fries', price: 10.99, rating: 4.1, image: 'https://via.placeholder.com/300x200' },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel className="featured-carousel">
        {featuredDishes.map((dish) => (
          <Carousel.Item key={dish.id}>
            <img className="d-block w-100" src={dish.image} alt={dish.name} />
            <Carousel.Caption>
              <h3>{dish.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Element name="menu-section">
        <section className="menu-section">
          <h2 className="menu-title">Our Menu</h2>
          <Row className="menu-items-row">
            {menuItems.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <DishCard {...item} />
              </Col>
            ))}
          </Row>
        </section>
      </Element>
    </div>
  );
};

export default HomePage;

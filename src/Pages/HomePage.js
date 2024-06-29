// src/components/HomePage.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import DishCard from '../components/DishCard';
import { Element } from 'react-scroll';
import '../styles/HomePage.css';

const featuredDishes = [
  { id: 1, name: 'Veg Biryani', image: 'https://thumbs.dreamstime.com/b/veg-biryani-pulav-served-round-brass-bowl-selective-focus-creative-ai-323050971.jpg' },
  { id: 2, name: 'Veggie Supreme Pizza', image: 'https://via.placeholder.com/800x400' },
  { id: 3, name: 'Chocolate Brownie Sundae', image: 'https://via.placeholder.com/800x400' },
];

const menuItems = [
  { id: 1, name: 'Veg Biryani', description: 'Long white rice with fresh veggies', price: 65.00, rating: 4.5, image: 'https://www.spicingyourlife.com/wp-content/uploads/2011/06/Vegetable-Biryani-2-300x200.jpg' },
  { id: 2, name: 'Chicken Biryani', description: 'Long white rice with tasty chicken', price: 80.00, rating: 4.2, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d4fcnchwt5z0jutyx1fd' },
  { id: 3, name: 'Gobi Manuchurian', description: 'Crisp romaine gobi with a red dressing', price: 55.00, rating: 4.0, image: 'https://recipesaresimple.com/wp-content/uploads/2023/09/gobi-manchurian-gravy-300x200.jpeg' },
  { id: 4, name: 'Pulao with Gravy', description: 'Pulao rice with gravy of your choice', price: 40.00, rating: 4.7, image: 'https://i0.wp.com/foodtrails25.com/wp-content/uploads/2019/04/img_6151_ezy-watermark_20-04-2019_12-22-43am.jpg?resize=300%2C200&ssl=1' },
  { id: 5, name: 'Puri Masala', description: 'Does this really need a description', price: 40.00, rating: 4.3, image: 'https://www.viniscookbook.com/wp-content/uploads/2018/05/2018-05-11-16-00-04-300x200.jpg' },
  { id: 6, name: 'Parotta with Gravy', description: "You're gonna get fat by eating this everyday", price: 40.00, rating: 4.1, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/899f9b7d88b22b12eced49f413522bfd' },
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

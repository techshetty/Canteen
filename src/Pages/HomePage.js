// src/components/HomePage.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import DishCard from '../components/DishCard';
import { Element } from 'react-scroll';
import '../styles/HomePage.css';

const featuredDishes = [
  { id: 1, name: 'Veg Biryani', image: 'https://thumbs.dreamstime.com/b/veg-biryani-pulav-served-round-brass-bowl-selective-focus-creative-ai-323050971.jpg' },
  { id: 2, name: 'Gobi Manchurian', image: 'https://manjulaskitchen.com/wp-content/uploads/gobi_cauliflower_manchurian.jpg' },
  { id: 3, name: 'Pav Bhaji', image: 'https://miro.medium.com/v2/resize:fit:1400/1*eGylbteKGLepWGU0HNJAKw.jpeg' },
];

const menuItems = [
  { id: 1, name: 'Veg Biryani', description: 'Long white rice with fresh veggies', price: 65.00, rating: 4.5, image: 'https://www.spicingyourlife.com/wp-content/uploads/2011/06/Vegetable-Biryani-2-300x200.jpg' },
  { id: 2, name: 'Chicken Biryani', description: 'Long white rice with tasty chicken', price: 80.00, rating: 4.2, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d4fcnchwt5z0jutyx1fd' },
  { id: 3, name: 'Gobi Manuchurian', description: 'Crisp romaine gobi with a red dressing', price: 55.00, rating: 4.0, image: 'https://recipesaresimple.com/wp-content/uploads/2023/09/gobi-manchurian-gravy-300x200.jpeg' },
  { id: 4, name: 'Pulao with Gravy', description: 'Pulao rice with gravy of your choice', price: 40.00, rating: 4.7, image: 'https://i0.wp.com/foodtrails25.com/wp-content/uploads/2019/04/img_6151_ezy-watermark_20-04-2019_12-22-43am.jpg?resize=300%2C200&ssl=1' },
  { id: 5, name: 'Puri Masala', description: 'Does this really need a description', price: 40.00, rating: 4.3, image: 'https://www.viniscookbook.com/wp-content/uploads/2018/05/2018-05-11-16-00-04-300x200.jpg' },
  { id: 6, name: 'Parotta with Gravy', description: "You're gonna get fat by eating this everyday", price: 40.00, rating: 4.1, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/899f9b7d88b22b12eced49f413522bfd' },
  { id: 7, name: 'Pav Bhaji', description: 'Spicy mashed vegetables with buttered bread', price: 50.00, rating: 4.6, image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/03/Pav-Bhaji-Recipe.jpg' },
  { id: 8, name: 'Sev Puri', description: 'Crispy puris topped with potatoes, chutneys, and sev', price: 45.00, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1e1UWDTq98SDyteKpDLVvpI34uCyyA0dZWg&s' },
  { id: 9, name: 'Mini Meal', description: 'Rice, dal, and some curry', price: 60.00, rating: 4.3, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPH_bGk1WCACJJ6_KYXR8cLnsTnAt9nwvSCM_Xi4KctfUVEytFYAe_86HCFqAKYi4CGtSawAhx05MWty0BC70Ur_BsSnhnviAGNB8jArjy8L3whI4xPk_3Xqoh04-exghbeQkJDpTcDBn8/s1600/Vegetable-dalcurry-rice.JPG' },
  { id: 10, name: 'Lemon Rice', description: 'Rice flavored with lemon and spices', price: 45.00, rating: 4.4, image: 'https://www.spicezone.com/wp-content/uploads/2016/02/DSC_4373-2-copy.jpg' },
  { id: 11, name: 'Bisi Bele Bath', description: 'A traditional South Indian rice dish with lentils and vegetables', price: 70.00, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZq0ieF02mxlOp8lSsGiCbS7BZ7guWI5h0JA&s' },
  { id: 12, name: 'Masala Dosa', description: 'Crispy dosa stuffed with spiced potatoes', price: 55.00, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFqPbuAGcTVqcZIibVrPfhhK0JgmEAtJ_zg&s' },
  { id: 13, name: 'Chicken Meal', description: 'Rice with chicken curry and accompaniments', price: 80.00, rating: 4.5, image: 'https://www.shutterstock.com/image-photo/indian-gavkari-chicken-thali-food-600nw-2017167788.jpg' },
  { id: 14, name: 'Chappathi with Kurma', description: 'Soft chappathi served with a spicy kurma', price: 40.00, rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGo5kgIWkb33GMPShBZdEkFGoLsJpekJyeQ&s' },
  { id: 15, name: 'Special Meal', description: 'Rice, curry, curds, and papad', price: 65.00, rating: 4.7, image: 'https://i0.wp.com/vps029.manageserver.in/menu/wp-content/uploads/2024/01/veg-thali.jpg?fit=1280%2C720&ssl=1' },
  { id: 16, name: 'Tomato Rice', description: 'Rice cooked with tomatoes and spices', price: 50.00, rating: 4.4, image: 'https://c.ndtvimg.com/2021-08/8j9265i8_tomato-rice_625x300_16_August_21.jpg' }
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

      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>

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
// src/pages/About.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page my-5">
      <Row className="mb-4">
        <Col>
        <Card className="mb-12">
          <h2>About Sahyadri Cafe</h2>
          <p>
            Welcome to Sahyadri Cafe, the heart of our college campus! We take pride in providing a variety of delicious and healthy meal options for our students, faculty, and staff. Our goal is to offer an inviting and comfortable space where everyone can enjoy a meal, relax, and socialize.
          </p>
          <p>
            Our canteen is committed to using fresh, locally sourced ingredients to ensure the highest quality and taste. We offer a wide range of dishes, including vegetarian, vegan, and gluten-free options to cater to all dietary preferences.
          </p>
          <p>
            We believe in sustainability and strive to minimize our environmental impact by using eco-friendly packaging and reducing food waste. Join us for breakfast, lunch, or dinner and experience the best of what our canteen has to offer.
          </p>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide a welcoming and inclusive environment where everyone can enjoy nutritious and delicious meals. We aim to support the well-being of our students,teachers and community through our food and services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We value quality, sustainability, and community. We are dedicated to offering meals that not only taste great but also contribute to a healthier lifestyle. We are committed to reducing our environmental footprint and supporting local producers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Our team of chefs and staff are passionate about food and service. With a focus on innovation and creativity, we continuously strive to bring new and exciting dishes to our menu. We are here to ensure you have a great dining experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;

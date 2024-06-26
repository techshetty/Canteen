import React from 'react';

const HomePage = () => {
  const menuItems = [
    { name: 'Burger', price: '$5.99', image: 'https://via.placeholder.com/150' },
    { name: 'Pizza', price: '$8.99', image: 'https://via.placeholder.com/150' },
    { name: 'Salad', price: '$4.99', image: 'https://via.placeholder.com/150' },
    { name: 'Sandwich', price: '$6.99', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div >
      <h1 className="text-center mb-5">Welcome to College Canteen</h1>
      <div className="row">
        {menuItems.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
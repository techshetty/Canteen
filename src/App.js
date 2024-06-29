import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import './App.css'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector("#preloader");
      if (preloader) {
        preloader.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.height = "auto";
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <div id="preloader"><div id="load"></div></div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
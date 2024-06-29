import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import loadHide from './scripts/preloader';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App" onLoad={loadHide}>
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
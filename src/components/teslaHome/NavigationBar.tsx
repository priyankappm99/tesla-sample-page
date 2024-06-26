import React from 'react';
import "./teslahome.scss"
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Tesla</div>
      <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
        <li><a href="#models">Models</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#performance">Performance</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

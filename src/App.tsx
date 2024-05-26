import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.scss';
import Footer from './components/teslaHome/Footer';
import HeroSection from './components/teslaHome/HeroSection';
import KeyFeatures from './components/teslaHome/KeyFeatures';
import Sustainability from './components/teslaHome/Sustainability';
import NavigationBar from './components/teslaHome/NavigationBar';
import Performance from './components/teslaHome/Performance';
import ProductSection from './components/products/ProductSection';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="scroll-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="scroll-hidden">
                <HeroSection />
                <ProductSection />
                <KeyFeatures />
                <Performance />
                <Sustainability />
              </div>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

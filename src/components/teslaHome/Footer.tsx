import React from 'react';
import "./teslahome.scss"
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="social-media">
        <a href="https://www.facebook.com/tesla" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com/tesla" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/teslamotors" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="contact-info">
        <p>Email: info@tesla.com</p>
        <p>Phone: +1-800-123-4567</p>
      </div>
      <div className="legal-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;

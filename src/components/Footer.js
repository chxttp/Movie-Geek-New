import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>MovieGeek &copy; 2023</p>
        <ul className="footer-links">
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li> */}
          <li>Copyright © 2023 - All right reserved</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

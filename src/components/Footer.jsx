import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <p>Email: your.email@example.com</p>
            <p>Điện thoại: +84 123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Mạng xã hội</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Thông tin</h3>
            <p>© 2025 Portfolio Website</p>
            <p>Được thiết kế với ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
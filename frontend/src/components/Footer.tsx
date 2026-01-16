import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VoiceFlow</h3>
            <p>
              Enterprise-grade voice services platform powered by Cloudonix.
              Build intelligent voice applications with AI, analytics, and global scalability.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Status Page</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Developer Portal</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 VoiceFlow. All rights reserved. Built with ❤️ for voice innovation.</p>
        </div>
      </div>
    </footer>
  );
};
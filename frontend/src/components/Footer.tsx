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
              <a href="https://facebook.com/voiceflow" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">📘</a>
              <a href="https://twitter.com/voiceflow" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">🐦</a>
              <a href="https://linkedin.com/company/voiceflow" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">💼</a>
              <a href="https://discord.gg/voiceflow" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-link">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="https://docs.voiceflow.com" target="_blank" rel="noopener noreferrer">API Documentation</a></li>
              <li><a href="https://docs.voiceflow.com/integrations" target="_blank" rel="noopener noreferrer">Integrations</a></li>
              <li><a href="https://status.voiceflow.com" target="_blank" rel="noopener noreferrer">Status Page</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="https://voiceflow.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://voiceflow.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li><a href="https://blog.voiceflow.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://voiceflow.com/press" target="_blank" rel="noopener noreferrer">Press Kit</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="https://help.voiceflow.com" target="_blank" rel="noopener noreferrer">Help Center</a></li>
              <li><a href="https://community.voiceflow.com" target="_blank" rel="noopener noreferrer">Community</a></li>
              <li><a href="https://developers.voiceflow.com" target="_blank" rel="noopener noreferrer">Developer Portal</a></li>
              <li><a href="https://status.voiceflow.com" target="_blank" rel="noopener noreferrer">System Status</a></li>
              <li><a href="https://voiceflow.com/security" target="_blank" rel="noopener noreferrer">Security</a></li>
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
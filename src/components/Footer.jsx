import { Link } from 'react-router-dom'
import { 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook,
  FaArrowUp 
} from 'react-icons/fa'
import { 
  MdEmail, 
  MdLocationOn 
} from 'react-icons/md'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h3 className="footer-logo">COMMUNITY COLLEGE</h3>
            <p className="footer-tagline">
              Where curiosity meets community and learning becomes an experience.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/archive" onClick={scrollToTop}>Archive</Link></li>
              <li><Link to="/events" onClick={scrollToTop}>Events</Link></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#technology">Technology</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#social-impact">Social Impact</a></li>
              <li><a href="#creativity">Creativity</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section newsletter-section">
            <h4 className="footer-heading">Stay Connected</h4>
            <p className="newsletter-text">
              Subscribe to get updates on upcoming events and new content.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <div className="contact-info">
              <p>
                <MdEmail className="contact-icon" />
                hello@communitycollege.com
              </p>
              <p>
                <MdLocationOn className="contact-icon" />
                Downtown Arts District
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Community College. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
            <span className="back-to-top-text">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsLetterSubmit = (e) => {
        e.preventDefault();

        console.log('Newsletter Subscription:',email);
        alert('Thank your for subscribing!');
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Unify Software Developers</h3>
                        <p>Building reliable, scalable, and innovative digital solutions for businesses worldwide.</p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="Twitter">𝕏</a>
                            <a href="#" aria-label="GitHub">gh</a>
                            <a href="#" aria-label="Instagram">ig</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>NewsLetter</h4>
                        <p>Subscribe to get the latest updates and insights.</p>
                        <form className="newsletter-form" onSubmit={handleNewsLetterSubmit}>
                            <input 
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" variant="primary">Subscribe</Button>
                        </form>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2025 Unify Software Developers. All Rights Reserved.</p>
                    <div className="footer-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

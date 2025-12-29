import React, { useState, useEffect } from "react";
import { Link,useLocation } from 'react-router-dom';
import Button from "../common/Button";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    useEffect(() => {
        setIsMenuOpen(false);
    },[location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home',path:'/' },
        { name: 'About',path:'/about' },
        { name:'Services',path:'/services' },
        { name:'Portfolio',path:'/portfolio' },
        { name:'Blog',path:'/blog' },
        { name:'Careers',path:'/careers' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="logo">USD</Link>

                    <button 
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"    
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={location.pathname === item.path ? 'active': ''}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button to="/contact" variant="nav">Contact Us</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

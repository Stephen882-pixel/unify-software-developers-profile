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
}
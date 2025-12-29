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

    
}
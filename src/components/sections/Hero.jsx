import React from "react";
import Button from '../common/Button';
import './Hero.css';

const hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="hero-content fade-in">
                    <h1>Building reliable, Scalable, and Innovative digital solutions.</h1>
                    <p>We design and develop custom web and mobile applications, cloud solutions, and IT audit services.</p>
                    <div className="hero-buttons">
                        <Button to=".contact" variant="primary" size="large">Get a Quote</Button>
                        <Button to="/contact" variant="secondary" size="large">Contact Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;

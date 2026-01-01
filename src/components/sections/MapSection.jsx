import React from "react";
import './MapSection.css';

const MapSection = () => {
    return(
        <section className="map-section">
            <div className="container">
                <h2 className="section-title">Find Us</h2>
                <div className="map-wrapper">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977736788!2d-122.39868668468208!3d37.78825797975771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4e3b7f3b%3A0x6e582d5f0b8c3e3e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;

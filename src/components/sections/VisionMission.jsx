import React from "react";
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vm-grid">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>
              To be the leading technology partner for businesses worldwide, recognized for 
              innovation, reliability, and transformative digital solutions that shape the future.
            </p>
          </div>
          <div className="vm-card">
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional software solutions that empower businesses to achieve their 
              goals through cutting-edge technology, expert guidance, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

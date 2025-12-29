import React from 'react';
import Button from '../common/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Let's Build Your Next Project</h2>
          <p>Ready to transform your ideas into reality? Get in touch with us today.</p>
          <Button to="/contact" variant="primary" size="large">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
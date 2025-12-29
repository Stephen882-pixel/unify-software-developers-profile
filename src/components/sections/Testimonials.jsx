import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
    {
      quote: 'USD transformed our business with their innovative web solution. The team was professional, responsive, and delivered beyond our expectations.',
      author: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.'
    },
    {
      quote: 'Working with USD was a game-changer. Their cloud migration expertise saved us time and money while improving our system performance.',
      author: 'Michael Chen',
      position: 'CTO, DataFlow Solutions'
    },
    {
      quote: 'The mobile app they developed exceeded all our requirements. Their attention to detail and user experience is outstanding.',
      author: 'Emily Rodriguez',
      position: 'Product Manager, HealthTech Pro'
    }
  ];

  return (
    <section className="testimonials">
        <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial,index) => (
                    <div key={index} className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">{testimonial.quote}</p>
                        <div className="testimonial-author">
                            <strong>{testimonial.author}</strong>
                            <span>{testimonial.position}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;

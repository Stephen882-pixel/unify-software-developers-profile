// TEMPORARY DEBUG VERSION
// Replace your src/components/sections/WhyChooseUs.jsx with this
// to see if the data is rendering

import React from 'react';
import Card from '../common/Card';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our team consists of highly skilled developers, designers, and consultants with years of industry experience.'
    },
    {
      icon: '⏰',
      title: 'On-Time Delivery',
      description: 'We pride ourselves on meeting deadlines and delivering projects on schedule without compromising quality.'
    },
    {
      icon: '🚀',
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and best practices to build modern, scalable solutions.'
    },
    {
      icon: '💎',
      title: 'Transparent Process',
      description: 'Clear communication and transparency throughout the development process ensure your vision comes to life.'
    }
  ];

  console.log('WhyChooseUs rendering:', features); // Debug log

  return (
    <section className="why-choose-us" style={{backgroundColor: '#f5f5f5', padding: '80px 0'}}>
      <div className="container">
        <h2 className="section-title" style={{color: '#1b1b1b', textAlign: 'center', marginBottom: '60px'}}>
          Why Choose Us
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div 
                className="feature-icon" 
                style={{
                  fontSize: '3rem', 
                  marginBottom: '20px',
                  display: 'block'
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{
                color: '#1b1b1b', 
                marginBottom: '15px',
                fontSize: '1.75rem',
                display: 'block'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#666666',
                display: 'block',
                lineHeight: '1.8'
              }}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
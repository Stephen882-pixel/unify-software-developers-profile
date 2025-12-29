import React from "react";
import  Card from '../common/Card';
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

  return (
    <section className="why-choose-us">
        <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
                {features.map((feature,index) => (
                    <Card key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;

import React from "react";
import { Link } from "react-router-dom";
import './ServicesPreview.css';

const ServicesPreview = () => {
    const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      link: '/services'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      link: '/services'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services on AWS, Azure, and GCP.',
      link: '/services'
    },
    {
      icon: '🔍',
      title: 'IT Audit & Consulting',
      description: 'Comprehensive IT audits and strategic consulting to optimize your systems.',
      link: '/services'
    }
  ];

  return (
    <section className="services-preview">
        <div className="container">
            <h2 className="section-title">Our Core Services</h2>
            <div className="services-grid">
                {services.map((service,index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link to={service.link} className="link-arrow">Learn More →</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ServicesPreview;
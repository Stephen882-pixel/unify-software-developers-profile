// TEMPORARY DEBUG VERSION
// Replace your src/components/sections/PortfolioPreview.jsx with this

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import './PortfolioPreview.css';

const PortfolioPreview = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online marketplace with payment integration and inventory management.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '/portfolio'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Patient management system with appointment scheduling and telemedicine features.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '/portfolio'
    },
    {
      title: 'Cloud Migration Project',
      description: 'Enterprise-level migration from on-premise to AWS cloud infrastructure.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '/portfolio'
    }
  ];

  console.log('PortfolioPreview rendering:', projects); // Debug log

  return (
    <section className="portfolio-preview" style={{backgroundColor: '#f5f5f5', padding: '80px 0'}}>
      <div className="container">
        <h2 className="section-title" style={{color: '#1b1b1b', textAlign: 'center', marginBottom: '60px'}}>
          Featured Projects
        </h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card" style={{padding: '0'}}>
              <div 
                className="portfolio-image" 
                style={{ 
                  background: project.gradient,
                  width: '100%',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '2rem',
                  fontWeight: '600'
                }}
              >
                {/* Gradient background - no text needed here */}
              </div>
              <div className="portfolio-content" style={{padding: '30px', backgroundColor: '#ffffff'}}>
                <h3 style={{
                  color: '#1b1b1b',
                  marginBottom: '15px',
                  fontSize: '1.75rem',
                  display: 'block'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#666666',
                  marginBottom: '20px',
                  display: 'block',
                  lineHeight: '1.8'
                }}>
                  {project.description}
                </p>
                <Link 
                  to={project.link} 
                  className="link-arrow"
                  style={{
                    color: '#ff6c37',
                    fontWeight: '500',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  View Case Study →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
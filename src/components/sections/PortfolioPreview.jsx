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

  return(
    <section className="portfolio-preview">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className='portfolio-grid'>
                    {projects.map((project,index) => (
                        <Card key={index} className="portfolio-card">
                            <div
                                className="portfolio-image"
                                style={{ background: project.gradient }}
                            ></div>
                            <div className='portfolio-content'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link to={project.link} className="link-arrow">View Case Study →</Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
    </section>
  );
};

export default PortfolioPreview;



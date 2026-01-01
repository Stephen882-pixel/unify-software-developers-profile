import React from "react";
import Button from '../common/Button';
import './PortfolioGrid.css';

const PortfolioGrid = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-grid-full">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item" data-category={project.category}>
              <div 
                className="portfolio-image" 
                style={{ background: project.gradient }}
              >
                {/* Gradient background */}
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">
                  {project.category === 'web' ? 'Web Development' :
                   project.category === 'mobile' ? 'Mobile Development' :
                   'Cloud Computing'}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <Button to="#" variant="secondary">View Case Study</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
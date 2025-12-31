import React from "react";
import './TechStack.css';

const TechStack = () => {
    const techCategories = [
    {
      title: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Angular']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby']
    },
    {
      title: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      title: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    }
  ];


   return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="section-title">Our Tech Stack</h2>
        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3>{category.title}</h3>
              <div className="tech-icons">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TechStack;


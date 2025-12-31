import React from "react";
import './CoreValues.css';


const CoreValues = () => {
    const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Transparency',
      description: 'Open communication and honest relationships are the foundation of our client partnerships.'
    },
    {
      icon: '🎯',
      title: 'Collaboration',
      description: 'We work closely with our clients, treating their success as our own.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for excellence in every project, never settling for "good enough."'
    }
  ];

  return (
    <section className="core-values">
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

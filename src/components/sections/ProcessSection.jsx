import React from "react";
import './ProcessSection.css';

const ProcessSection = () => {
    const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and requirements through detailed consultations.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines, milestones, and resource allocation.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create intuitive interfaces and user experiences that align with your brand.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers build your solution using best practices and cutting-edge technologies.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally.'
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'We launch your solution and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <section className="process-selection">
        <div className="container">
            <h2 className="section-title">Our Development Process</h2>
            <div className="process-grid">
                {steps.map((step,index) => (
                    <div key={index} className="process-step">
                        <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}                                 
            </div>
        </div>
    </section>
  );
};

export default ProcessSection;


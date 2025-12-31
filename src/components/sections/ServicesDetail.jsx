import React from "react";
import Button from '../common/Button';
import './ServicesDetail.css';

const ServicesDetail = () => {
    const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'We create powerful, responsive web applications that deliver exceptional user experiences. From simple websites to complex enterprise solutions, our team leverages modern frameworks and best practices to build scalable, maintainable applications.',
      features: [
        'Custom Web Applications',
        'E-Commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Transform your ideas into powerful mobile applications. We develop native and cross-platform apps that provide seamless experiences across iOS and Android devices, ensuring your business reaches users wherever they are.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Maintenance & Support'
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Harness the power of cloud technology to scale your business. Our cloud experts design, implement, and manage cloud infrastructure that\'s secure, scalable, and cost-effective, helping you focus on what matters most.',
      features: [
        'Cloud Migration Services',
        'AWS, Azure & GCP Solutions',
        'Infrastructure as Code',
        'Cloud Security & Compliance',
        'DevOps & CI/CD Pipelines',
        'Cloud Cost Optimization'
      ]
    },
    {
      icon: '🔍',
      title: 'IT Audit & Consulting',
      description: 'Ensure your IT infrastructure is secure, efficient, and aligned with your business goals. Our comprehensive audits and strategic consulting services help identify risks, optimize processes, and plan for future growth.',
      features: [
        'IT Infrastructure Assessment',
        'Security Audits & Compliance',
        'Technology Strategy Planning',
        'Risk Management',
        'Process Optimization',
        'Digital Transformation Consulting'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create delightful user experiences that drive engagement and conversions. Our design team combines aesthetics with functionality to craft interfaces that users love, backed by research and best practices.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design',
        'Design Systems',
        'Accessibility Compliance'
      ]
    }
  ];


  return(
    <section className="services-detail">
        <div className="container">
            {services.map((service,index) => (
                <div key={index} className="service-detail-card">
                    <div className="service-detail-content">
                        <div className="service-detail-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            ))}
                        </ul>
                        <Button to="/contact" variant="primary">Request a Quote</Button>
                    </div>
                </div>
            ))}                                                                         
        </div>
    </section>
  );
};

export default ServicesDetail;

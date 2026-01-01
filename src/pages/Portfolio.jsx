import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import PortfolioFilter from '../components/sections/PortfolioFilter';
import PortfolioGrid from '../components/sections/PortfolioGrid';
import CTA from '../components/sections/CTA';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'A comprehensive online marketplace with advanced features including payment integration, inventory management, and real-time analytics.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      category: 'mobile',
      title: 'Healthcare Mobile App',
      description: 'Patient management system with appointment scheduling, telemedicine features, and secure health record storage.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      technologies: ['React Native', 'Firebase', 'WebRTC']
    },
    {
      id: 3,
      category: 'cloud',
      title: 'Enterprise Cloud Migration',
      description: 'Complete migration of on-premise infrastructure to AWS, resulting in 40% cost reduction and improved scalability.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 4,
      category: 'web',
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics platform with interactive charts, automated reporting, and multi-user collaboration.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      technologies: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
      id: 5,
      category: 'mobile',
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness app with workout tracking, nutrition planning, and social features to keep users motivated.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      technologies: ['Flutter', 'Firebase', 'ML Kit']
    },
    {
      id: 6,
      category: 'web',
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, assessments, and progress tracking for students and instructors.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      technologies: ['Angular', '.NET', 'Azure']
    },
    {
      id: 7,
      category: 'cloud',
      title: 'Serverless API Platform',
      description: 'Scalable serverless architecture handling millions of API requests with automatic scaling and cost optimization.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB']
    },
    {
      id: 8,
      category: 'mobile',
      title: 'Food Delivery App',
      description: 'On-demand food delivery platform with real-time tracking, payment integration, and restaurant management system.',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      technologies: ['React Native', 'Node.js', 'Google Maps']
    },
    {
      id: 9,
      category: 'web',
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, virtual tours, mortgage calculator, and agent management system.',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL']
    }
  ];


  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Explore our successful projects and case studies"
      />
      <PortfolioFilter 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <PortfolioGrid projects={filteredProjects} />
      <CTA />
    </div>
  );
};

export default Portfolio;
import React from "react";
import PageHeader from '../components/common/PageHeader';
import ServicesDetail from "../components/sections/ServicesDetail";
import ProcessSection from "../components/sections/ProcessSection";
import CTA from "../components/sections/CTA";

const Services = () => {
  return (
    <div className="services-page">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive digital solutions tailored to your business needs"
      />
      <ServicesDetail />
      <ProcessSection />
      <CTA />
    </div>
  );
};

export default Services;
import React from "react";
import PageHeader from "../components/common/PageHeader";
import CompanyOverview from "../components/sections/CompanyOverview";
import VisionMission from "../components/sections/VisionMission";
import CoreValues from "../components/sections/CoreValues";
import Team from "../components/sections/Team";
import TechStack from "../components/sections/TechStack";

const About = () => {
    return(
        <div className="about-page">
            <PageHeader 
                title="About Us"
                subtitle="Discover our story, meet our team, and learn about our values"
            />
            <CompanyOverview />
            <VisionMission />
            <CoreValues />
            <Team />
            <TechStack />
        </div>
    );
};

export default About;
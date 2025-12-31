import React from "react";
import  './Team.css';


const Team = () => {
    const teamMembers = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      bio: 'With 15+ years in software development, John leads our vision and strategic direction.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      bio: 'Sarah oversees our technical architecture and ensures we stay ahead of technology trends.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'David brings expertise in full-stack development and leads our engineering team.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'Emily Chen',
      role: 'UI/UX Designer',
      bio: 'Emily crafts beautiful, intuitive interfaces that users love to interact with.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: 'Michael Brown',
      role: 'Cloud Architect',
      bio: 'Michael specializes in designing scalable cloud infrastructure and migrations.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Project Manager',
      bio: 'Lisa ensures projects run smoothly and clients stay informed every step of the way.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div 
                className="member-photo" 
                style={{background: member.gradient}}
              ></div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Team;
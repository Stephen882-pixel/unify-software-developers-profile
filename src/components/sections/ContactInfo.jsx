import React from "react";
import './ContactInfo.css';


const ContactInfo = () => {
    const contactDetails = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@unifysoftware.dev',
      link: 'mailto:hello@unifysoftware.dev'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: '📍',
      title: 'Office',
      content: '123 Tech Street, Suite 100\nSan Francisco, CA 94105',
      link: null
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Instagram', url: '#' }
  ];

  return (
    <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        <div className="contact-details">
            {contactDetails.map((detail,index) => (
                <div key={index} className="contact-item">
                    <div className="contact-icon">{detail.icon}</div>
                    <div>
                        <h3>{detail.title}</h3>
                        {detail.link ?  (
                            <a href="{detail.link}">{detail.content}</a>
                        ): (
                            <p style={{whiteSpace: 'pre-line'}}>{detail.content}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links-large">
                {socialLinks.map((social,index) => (
                    <a key={index} href="{social.url}" aria-label="{social.name}">
                        {social.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};


export default ContactInfo;
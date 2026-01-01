import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactInfo from '../components/sections/ContactInfo';
import ContactForm from '../components/sections/ContactForm';
import MapSection from '../components/sections/MapSection';

const Contact = () => {
    return(
        <div className='contact-page'>
            <PageHeader
                title="Contact Us"
                subtitle="Let's discuss how we can help bring your vision to life"
            />
            <section className='contact-section'>
                <div className='container'>
                    <div className='contact-layout'>
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>
            <MapSection />
        </div>
    );
};

export default Contact;

import React, {useState} from "react";
import Button from '../common/Button';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        company:'',
        service:'',
        budget:'',
        message:''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } =  e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.firstName || !formData.lastName || !formData.email || !formData.message){
            setFormStatus('error');
            alert('Please fill in all required fields');
            return;
        }

        console.log('Form Submitted:',formData);
        setFormStatus('success');
        alert('Thank you for your message. We will get back to you soon.');

        setFormData({
            firstName:'',
            lastName:'',
            email:'',
            company:'',
            service:'',
            budget:'',
            message:''
        });

        setTimeout(() => setFormStatus(''),3000);
    };

    return(
        <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required                        
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select 
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    >
                        <option value="">Select a Service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="cloud">Cloud Computing</option>
                        <option value="audit">IT Audit & Consulting</option>
                        <option value="design">UI/UX Design</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select 
                    name="budget"
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    >
                        <option value="">Select Budget Range</option>
                        <option value="small">$5,000 -  15,000</option>
                        <option value="medium">$15,000 - 50,000</option>
                        <option value="large">$50,000 - $100,000</option>
                        <option value="enterprise">$100,000+</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea 
                    name="message"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <Button type="submit" variant="primary" size="large">
                    Send Message
                </Button>
                {formStatus === 'success' && (
                    <p className="form-success">Message Sent Successfully!</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
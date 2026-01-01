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
};
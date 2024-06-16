import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!formState.name.trim()) {
            errors.name = 'Name is required';
            formIsValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formState.email)) {
            errors.email = 'Valid email is required';
            formIsValid = false;
        }

        if (!formState.message.trim()) {
            errors.message = 'Message is required';
            formIsValid = false;
        }

        setFormErrors(errors);
        return formIsValid;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            setResult("Sending....");
            const formData = new FormData(event.target);
            formData.append("access_key", "ebf77c58-c391-4b09-8912-fe8d23cde5dd");

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    alert(data.message);
                    event.target.reset();
                    setResult("");
                    setFormState({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    console.log("Error", data);
                    setResult(data.message);
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                setResult("Error submitting the form");
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
    };

    return (
        <div id='contact' className='contact'>
            <div className="title-box">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>boddepalli.ramana48@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 99638 41809</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Visakhapatnam</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder='Enter your name'
                        name='name'
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}

                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter your email'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}

                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="8"
                        placeholder='Enter your message'
                        value={formState.message}
                        onChange={handleChange}
                    ></textarea>
                    {formErrors.message && <span className="error">{formErrors.message}</span>}
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

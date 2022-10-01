import React from 'react';
import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import Section from '../UI/Section';

const ContactPage = () => {
    return (
        <Section title='Contact' className='section-bg-1 '>
            <Contact />
            <ContactForm />
        </Section>
    );
};

export default ContactPage;

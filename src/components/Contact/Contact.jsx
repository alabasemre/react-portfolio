import React from 'react';
import styles from './ContactForm.module.css';

const Contact = () => {
    return (
        <section className={styles['contact']}>
            <div className={styles['contact-group']}>
                <h2>Address</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fuga, facilis?
                </p>
            </div>
            <div className={styles['contact-group']}>
                <h2>Email</h2>
                <p>ea.appdev18@gmail.com</p>
            </div>
            <div className={styles['contact-group']}>
                <h2>Phone</h2>
                <p>+90 222 22 22</p>
            </div>
        </section>
    );
};

export default Contact;

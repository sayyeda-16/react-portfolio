// src/components/Contact/ContactForm.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Contact.module.css"; 

export const ContactForm = ({ setIsFormOpen }) => {
    // Replace "mnngallj" with your actual Formspree form ID
    const [state, handleSubmit] = useForm("mnngallj");

    if (state.succeeded) {
        return (
            <div className={styles.contactFormOverlay}>
                <div className={styles.contactFormContainer}>
                    <button onClick={() => setIsFormOpen(false)} className={styles.closeBtn}>&times;</button>
                    <p>Thanks for your message! 😊</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.contactFormOverlay}>
            <div className={styles.contactFormContainer}>
                <button onClick={() => setIsFormOpen(false)} className={styles.closeBtn}>&times;</button>
                <form onSubmit={handleSubmit}>
                    <h2>Contact Me</h2>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
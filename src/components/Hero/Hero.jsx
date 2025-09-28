// src/components/Hero/Hero.jsx
import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { ContactForm } from "../Contact/ContactForm"; 

export const Hero = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sayyeda</h1>
                <p className={styles.description}>
                    I am a versatile Software Engineering student driven by a passion for both code and community. I excel at turning ideas into reality, with a specialization in web development, data visualization, and scientific computing. Beyond my technical skills, my work is defined by a deep appreciation for collaboration and mentorship, which allows me to deliver impactful results through strong communication and leadership. I'm always looking for new challenges and am particularly interested in contributing to engineering advancements that drive innovation and sustainability in the energy and automotive sectors.
                </p>
                <a onClick={() => setIsFormOpen(true)} className={styles.contactBtn}>Contact Me</a>
            </div>
            <div className="heroContainer">
                <img src={getImageUrl("Portfolio Pic.png")} alt="Hero image of me" className={styles.heroImg} />
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

            {/* Conditionally render the contact form, passing the state setter as a prop */}
            {isFormOpen && <ContactForm setIsFormOpen={setIsFormOpen} />}
        </section>
    );
};
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import skills from "../../data/skills.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Application Developer</h3>
              <p>
                I develop modern web applications with a focus on creating dynamic front-end experiences using React and TypeScript. My skills extend to back-end development with the MERN (MongoDB, Express.js, React, Node.js) stack and other technologies such as MySQL.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Scientific Programmer and Data Analyst</h3>
              <p>
                I use Python to solve computational problems in scientific computing, data analysis, and statistical modeling, with projects in data visualization and predictive analysis.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Object-Oriented Designer</h3>
              <p>
                 I have designed and implemented robust, object-oriented systems in Java, applying core principles to real-world applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
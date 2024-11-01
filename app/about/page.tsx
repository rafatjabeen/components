import React from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About Me</h1>

            <p>
                Hello, I am <strong>Rafat Jabeen</strong>. I hold a <strong>B.Sc.</strong> degree and am currently a student at <strong>GIAIC</strong>.
            </p>

            <h2>My Skills</h2>
            <ul>
                <li>Freelancing</li>
                <li>Virtual Assistance</li>
                <li>Communication & Soft Skills</li>
                <li>Digital Marketing</li>
                <li>Proficiency in MS Office</li>
                <li>Web Development (HTML, CSS, TypeScript)</li>
                <li>Experience in Teaching</li>
            </ul>

            <p>
                I am passionate about leveraging my skills to make a positive impact and am committed to continuous learning and growth.
            </p>

            <h2>Navigation</h2>
            <ul>
                <li><Link href="/">Go to Home Page</Link></li>
                <li><Link href="/contact">Go to Contact Page</Link></li>
                <li><Link href="/service">Go to Service Page</Link></li> 
            </ul>
        </div>
    );
};

export default AboutPage;
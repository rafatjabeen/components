import React from "react";
import styles from "./Header.module.css";
import Link from 'next/link';



const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>My Next.js Website</h1>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/service">Service</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

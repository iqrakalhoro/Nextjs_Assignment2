import React from 'react';
import styles from "./hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to Iqra's WebPage</h1>
                <p className={styles.subtitle}>Find your experience the best of all.</p>
                <button className={styles.ctaButton}>Book Now</button>
            </div>
        </section>
    ) 

};

export default Hero;

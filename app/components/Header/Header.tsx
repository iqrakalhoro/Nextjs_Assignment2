import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <ul className={styles.ul}>
            <li><Link href="/" className={styles.home}>Home</Link></li>
            <li><Link href="/about" className={styles.about}>About</Link></li>
            <li><Link href="/contact" className={styles.contact}>Contact</Link></li>
            <li><Link href="/services" className={styles.service}>Services</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

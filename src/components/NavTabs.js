import React from 'react';
import styles from './NavTabs.module.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          About
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Portfolio
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
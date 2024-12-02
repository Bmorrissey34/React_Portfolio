import React, { useState } from 'react';
import styles from './NavTabs.module.css';

function NavTabs({ currentPage, handlePageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='menuIconContainer'>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776; 
      </div>
      <ul className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
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
        <li className={styles.navItem}>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Contact
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#travel"
            onClick={() => handlePageChange('Travel')}
            className={currentPage === 'Travel' ? `${styles.navLink} ${styles.active}` : styles.navLink}
          >
            Travel
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
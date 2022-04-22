import React from 'react';
import styles from './Nav.module.css'


export const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li><a href="#" className={styles.link + ' ' + styles.active}>Home</a></li>
        <li><a href="#" className={styles.link}>About</a></li>
        <li><a href="#" className={styles.link}>Portfolio</a></li>
        <li><a href="#" className={styles.link}>Contacts</a></li>
      </ul>
      <div className={styles.phone}>
        <a href='tel:+380930179629'>+380 (93) 017 96 29</a>
      </div>

    </div>
  );
};
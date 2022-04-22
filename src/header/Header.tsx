import React from 'react';
import styles from './Header.module.css'
import {Nav} from "../nav/Nav";


export const Header = () => {
  return (
    <div className={styles.header}>
    <div className={styles.container}>
      <Nav/>
    </div>
    </div>
  );
};
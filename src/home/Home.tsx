import React from 'react';
import styles from './Home.module.css'
import {Links} from "../Links/Links";

export const Home = () => {


  return (
    <div className={styles.homeBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Hello, I'm</h3>
          <h1>Bogdan <br/> Mykhailov</h1>
          <h2>Front-End developer</h2>
          <div className={styles.contactBtn}>
            <a href="#" className={styles.contactBtnStyle}>Hire me</a>
          </div>
        </div>
        <div className={styles.linksPhoto}>
          <Links/>
          <div className={styles.photo}>
            <img className="wow fadeInRight" src='https://davis-html.netlify.app/assets/img/section/hero-img.jpg'
                 alt="Hero"/>
          </div>
        </div>
      </div>
    </div>
  );
};
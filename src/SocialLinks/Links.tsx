import React from 'react';
import styles from './Links.module.css'
import facebook from '../Icons/facebook.png'
import instagram from '../Icons/instagram.png'
import linkedin from '../Icons/linkedin.png'
import twitter from '../Icons/twitter.png'

export const Links = () => {
  return (
    <div>
      <div className={styles.socialGroup}>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialBtn}>
            <span><img src={facebook} alt='facebook' className={styles.socialIcon}/></span>
            <span className={styles.iconName}>Facebook</span>
          </a>
          <a href="#" className={styles.socialBtn}>
            <span><img src={instagram} alt='instagram' className={styles.socialIcon}/></span>
            <span className={styles.iconName}>Instagram</span>
          </a>
          <a href="#" className={styles.socialBtn}>
            <span><img src={linkedin} alt='linkedin' className={styles.socialIcon}/></span>
            <span className={styles.iconName}>Linkedin</span>
          </a>
          <a href="#" className={styles.socialBtn}>
            <span><img src={twitter} alt='twitter' className={styles.socialIcon}/></span>
            <span className={styles.iconName}>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}
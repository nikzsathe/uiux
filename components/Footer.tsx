import React from 'react';
import styles from '@styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
         Design by <strong>Nikhil Sathe</strong>
      </span>
      <span>
        For{' '}
        <a href='https://absolute-global.com'>
        Absolute Global Outsourcing
        </a>{' '}
        👈
      </span>
    </footer>
  );
};

export default Footer;

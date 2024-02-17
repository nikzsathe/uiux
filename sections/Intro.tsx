import React from 'react';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';

const Intro = () => {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT' page='01'>
      <>
        <BgTitle title='ABOUT' />
        <br></br>
        <div>
          <p>
            {/* add your text here */}
            <span
              className={styles.myName}
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              UI/UX
            </span>
            {/* <br /> */}
            At <b>Absolute Global Outsourcing</b>, we redefine excellence in UI/UX design services to elevate your digital presence and user experience to unprecedented heights. Our dedicated team of seasoned professionals specializes in crafting intuitive, visually stunning interfaces that resonate with your audience and drive tangible results for your business.
          </p>
          Contact us today to learn more about how we can help you achieve your goals. Let&apos;s{' '}
          <a onClick={scrollToContact}>
            <b style={{ textDecoration: 'underline' }}>chat </b>💬
          </a>{' '}
        </div>
      </>
    </SectionCard>
  );
};

export default Intro;

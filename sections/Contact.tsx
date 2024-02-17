import React, { useContext } from 'react';
import SectionCard from '@components/SectionCard';
import ThemeContext from '@contexts/ThemeContext';
import { socialLinks } from '@sections/me';
import ClipCopy from '@components/ClipCopy';
// styles
import styles from '@styles/Contact.module.sass';
import BgTitle from '@components/BgTitle';

const Contact = () => {
  const { themeStyle } = useContext(ThemeContext);

  return (
    // change your title and section id
    <SectionCard id='contact' title='CONTACT' page='04'>
      <>
        <BgTitle title='CONTACT' />
        <br></br> <br></br>
        <p className={styles.articleDescription}>
          {/* change your contact description */}
          Looking for an awesome <b>UI/UX Designer Agency</b>?<br></br> 
          Elevate your digital presence with Absolute Global Outsourcing | UI/UX. Contact us today to learn more about how we can help you achieve your goals.
        </p>
        <ClipCopy copy='contact@absolute-global.com' theme={themeStyle} />
        <p className={styles.socialLinksTitle}></p>
        <section className={styles.socialLinksContainer}>
          {/* add your social information in the projectData.tsx file */}
          {socialLinks.map((s, i) => {
            return (
              <a
                key={i}
                href={s.link}
                aria-label={`navigate to ${s.link}`}
                className={styles.link}
                data-social-links={s.title}
              >
                {s.icon}
              </a>
            );
          })}
        </section>
      </>
    </SectionCard>
  );
};

export default Contact;

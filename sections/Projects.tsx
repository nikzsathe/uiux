import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@sections/me';
import BgTitle from '@components/BgTitle';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='PROJECTS' page='03'>
      <div style={{ position: 'relative' }}>
        <BgTitle title='SERVICES' />
        <div>
          <p>
            {/* add your text here */}
            <span
              
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              <br></br>
            </span>
            {/* <br /> */}
            <b>UI Design:</b> From sleek, minimalist interfaces to bold, vibrant designs, we create visually stunning UIs that leave a lasting impression.<br></br>
            <b>UX Design:</b> Our user-centric approach ensures intuitive navigation, seamless interactions, and unparalleled usability across all digital touchpoints.<br></br>
            <b>Mobile App Design:</b> Harnessing the power of mobile technology, we design immersive, user-friendly apps that captivate audiences on the go.<br></br>
            <b>Web Design:</b> Whether you need a simple, elegant website or a complex, feature-rich platform, our expert designers deliver exceptional web experiences tailored to your unique requirements.<br></br>
            <b>E-commerce Design:</b> We specialize in crafting immersive e-commerce experiences that drive conversions and foster customer loyalty, combining stunning visuals with intuitive functionality.<br></br>
          </p>
          <p>
          <strong>Why Choose Absolute Global Outsourcing?</strong><br></br><br></br>

          <b>Expertise:</b> With years of experience and a proven track record of success, we possess the expertise to tackle projects of any size or complexity.<br></br>

          <b>Collaborative Approach:</b> We believe in forging strong partnerships with our clients, working closely with you every step of the way to bring your vision to life.<br></br>

          <b>Innovation:</b> We stay ahead of the curve with the latest design trends, technologies, and methodologies, ensuring your project stands out in a crowded digital landscape.<br></br>

          <b>Client Satisfaction:</b> Your satisfaction is our top priority. We go above and beyond to exceed your expectations, delivering exceptional results on time and within budget.<br></br>

          </p>
          Elevate your digital presence with Absolute Global Outsourcing. Contact us today to learn more about how we can help you achieve your goals.
          
        </div>
        
      </div>
    </SectionCard>
  );
};

export default Projects;

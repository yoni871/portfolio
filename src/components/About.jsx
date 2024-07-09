import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutMe from "../icons/aboutMe.JPG";
import aboutMe2 from '../icons/AboutMe2.JPG';
import musicPic from '../icons/musicpic.jpg';
import "../App.css";

// Define animation variants
const containerVariant = {
  visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0 }
};

const imageVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, scale: 0 }
};

const textVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, x: -50 }
};

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className='about'
      id="about"
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      <Row className='align-items-center'>
        <Col xs={12} md={6} className="text-center">
          <motion.img 
            src={aboutMe}
            alt='about me'
            className='img-fluid about-img'
            style={{ height: '200px', width: '300px' }}
            variants={imageVariant}
            initial="hidden"
            animate={control}
          />
          <motion.img 
            src={aboutMe2}
            alt='about me'
            className='img-fluid about-img'
            style={{ height: '200px', width: '300px' }}
            variants={imageVariant}
            initial="hidden"
            animate={control}
          />
          <motion.img 
            src={musicPic}
            alt='about me'
            className='img-fluid about-img'
            style={{ height: '200px', width: '300px' }}
            variants={imageVariant}
            initial="hidden"
            animate={control}
          />
        </Col>
        <Col xs={12} md={6} className='aboutme-parag'>
          <motion.h1 variants={textVariant} initial="hidden" animate={control}>About Me</motion.h1>
          <motion.p variants={textVariant} initial="hidden" animate={control}>
            Hi, I'm Yonatan Demissie, a recent graduate from Texas Tech University with a degree in Computer Science. 
            With a strong foundation in software development, I specialize in web and app development, 
            creating intuitive and impactful digital solutions. My passion for technology drives me to continuously 
            learn and adapt to the ever-evolving landscape of the tech industry. Whether working on 
            individual projects or collaborating with teams, 
            I am dedicated to delivering high-quality, user-centric applications that solve real-world problems.
          </motion.p>
          <motion.p variants={textVariant} initial="hidden" animate={control}>
            In my free time, I enjoy staying active by playing sports, which keeps me energized and focused. 
            Additionally, I have a love for music and often spend time playing instruments and exploring new genres. 
            These hobbies provide a great balance to my professional life, fueling my creativity and enhancing my problem-solving skills.
          </motion.p>
          <Row className='info-about'>
            <Col>
              <motion.h4 variants={textVariant} initial="hidden" animate={control}><strong>Name</strong></motion.h4>
              <motion.p variants={textVariant} initial="hidden" animate={control}>Yonatan Demissie</motion.p>
              <motion.h4 variants={textVariant} initial="hidden" animate={control}><strong>Email</strong></motion.h4>
              <motion.p variants={textVariant} initial="hidden" animate={control}>Yonatan.Ademissie@gmail.com</motion.p>
            </Col>
            <Col>
              <motion.h4 variants={textVariant} initial="hidden" animate={control}><strong>Education</strong></motion.h4>
              <motion.p variants={textVariant} initial="hidden" animate={control}>BS in Computer Science and Math minor</motion.p>
              <motion.h4 variants={textVariant} initial="hidden" animate={control}><strong>Employment</strong></motion.h4>
              <motion.p variants={textVariant} initial="hidden" animate={control} style={{ color: "white" }}><strong>Open</strong></motion.p>
            </Col>
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
}

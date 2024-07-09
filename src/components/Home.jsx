import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homePic from "../icons/aboutPic.png";
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail.png';
import instagram from '../icons/instagram.png';
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css';

// Define animation variants
const containerVariant = {
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  hidden: { opacity: 0 }
};

const textVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, y: 20 }
};

const imageVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export default function Home() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const imageStyle = {
    width: '50px',
    height: '50px',
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    padding: '20px',
  };

  return (
    <motion.div
      className='home'
      id="home"
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <motion.h1 variants={textVariant}>
              Hello, I'm <br />
              <strong style={{ display: 'inline-block' }}>
                <Typewriter
                  options={{
                    strings: ['Yonatan Demissie'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </strong>
            </motion.h1>
            <motion.p variants={textVariant}>
              Motivated and detail-oriented computer science graduate of 2024 with proficiency in programming and data structures. 
              Actively seeking opportunities to apply technical skills in a professional setting.
            </motion.p>
            <motion.div variants={textVariant}>
              <a href="https://www.linkedin.com/in/yonatan-demissie-b37b10185/" target="_blank" rel="noopener noreferrer">
                <Button type="button" className="btn btn-link button-home" style={buttonStyle}>
                  <motion.img src={linkedin} alt="LinkedIn" style={imageStyle} />
                </Button>
              </a>
              <a href="mailto:yonatan.ademissie@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button type="button" className="btn btn-link button-home" style={buttonStyle}>
                  <motion.img src={gmail} alt="Gmail" style={imageStyle} />
                </Button>
              </a>
              <a href="https://www.instagram.com/yonatan_dem/" target="_blank" rel="noopener noreferrer">
                <Button type="button" className="btn btn-link button-home" style={buttonStyle}>
                  <motion.img src={instagram} alt="Instagram" style={imageStyle} />
                </Button>
              </a>
            </motion.div>
          </Col>

          <Col xs={12} md={6} className="text-center home-img">
            <motion.img
              src={homePic}
              alt='Home'
              className='img-fluid'
              style={{ width: '400px' }}
              variants={imageVariant}
              initial="hidden"
              animate={control} 
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

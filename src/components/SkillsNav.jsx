import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IconsList from '../IconsList';
import "../App.css";

// Define animation variants
const containerVariant = {
  visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0 }
};

const itemVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, y: 20 }
};

const SkillsNav = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const renderIcon = (icon) => (
    <motion.div variants={itemVariant}>
      {icon}
    </motion.div>
  );

  const renderText = (text) => (
    <motion.h5 style={{ color: 'beige' }} variants={itemVariant}>
      <strong>{text}</strong>
    </motion.h5>
  );

  const renderParagraph = (text) => (
    <motion.p className='skills-p' variants={itemVariant}>
      {text}
    </motion.p>
  );

  return (
    <motion.div
      className='skills-nav mx-auto'
      style={{ overflow: 'hidden' }}
      id='skills'
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      <Container>
        <Row>
          <Col className='skills-title'>
            <motion.h1 className='icon-h1' variants={itemVariant}>
              <strong>MY SKILLS</strong>
            </motion.h1>
          </Col>
        </Row>
        <Row className='icons-row'>
          <Col className='icons-col text-center mb-4' xs={12} md={6} lg={4}>
            {renderIcon(IconsList[0].icon)}
            {renderText(IconsList[0].text)}
            {renderParagraph("I bring over four years of hands-on experience with HTML and CSS, enabling me to create visually appealing and responsive web interfaces efficiently.")}

            {renderIcon(IconsList[7].icon)}
            {renderText(IconsList[7].text)}
            {renderParagraph("I utilized React.js to develop a personal website, a todo application, and Biteswipe - an innovative app merging Tinder-like interactions with Yelp functionalities.")}

            {renderIcon(IconsList[3].icon)}
            {renderText(IconsList[3].text)}
            {renderParagraph("I extensively utilized GitHub to collaborate on multiple projects, facilitating seamless teamwork and version control.")}
          </Col>

          <Col className='icons-col text-center mb-4' xs={12} md={6} lg={4}>
            {renderIcon(IconsList[1].icon)}
            {renderText(IconsList[1].text)}
            {renderParagraph("Throughout my college tenure, I actively engaged in numerous mini projects focused on data structures and algorithms.")}

            {renderIcon(IconsList[2].icon)}
            {renderText(IconsList[2].text)}
            {renderParagraph("I have employed C++ to develop a variety of projects using API communication, multithreading, and process scheduling algorithms.")}
          </Col>

          <Col className='text-center'>
            {renderIcon(IconsList[4].icon)}
            {renderText(IconsList[4].text)}
            {renderParagraph("I worked on multiple mini projects, including a calculator app using object-oriented design in Java. These projects enhanced my understanding of OOP principle.")}

            {renderIcon(IconsList[6].icon)}
            {renderText(IconsList[6].text)}
            {renderParagraph("I collaborated with a team to develop a facial recognition system using Python and TensorFlow, leveraging deep learning techniques to achieve accurate results.")}

            {renderIcon(IconsList[5].icon)}
            {renderText(IconsList[5].text)}
            {renderParagraph("By implementing multithreading in a C++ project, I processed signed 32-bit integer data from a file, utilized mutex locks or semaphores to prevent thread interference.")}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default SkillsNav;

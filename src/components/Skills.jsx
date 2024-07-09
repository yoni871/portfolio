import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import biteSwipe from '../icons/biteSwipe.jpg';
import weather from '../icons/weather.jpg';
import faceRecognition from '../icons/face-recognition.png';
import '../App.css';

// Define animation variants
const containerVariant = {
  visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0 }
};

const cardVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  hidden: { opacity: 0, y: 20 }
};

export default function Skills() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start('visible');
      } else {
        control.start('hidden');
      }
    }, [control, inView]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            img: biteSwipe,
            title: "BiteSwipe",
            text: "Collaborated on BiteSwipe, a mobile app using React Native, Node.js, and Yelp API, enabling users to search for restaurants, swipe through options, and save favorites. Developed backend with MongoDB and optimized for iOS."
        },
        {
            img: weather,
            title: "Weather App",
            text: "Developed a web application using JavaScript, HTML, CSS, and the OpenWeatherMap API to provide real-time weather forecasts, including temperature, humidity, and wind speed, for user-specified locations."
        },
        {
            img: faceRecognition,
            title: "Facial Recognition",
            text: "Collaborated in a team to develop a facial recognition system utilizing deep learning techniques, specifically using TensorFlow in Python."
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const getVisibleItems = () => {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const nextIndex = (currentIndex + 1) % items.length;
        return [items[prevIndex], items[currentIndex], items[nextIndex]];
    };

    const visibleItems = getVisibleItems();

    return (
        <motion.div
          className='carousel-container'
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={control}
        >
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={2} className='d-flex align-items-center justify-content-center'>
                        <div className='carousel-control-prev' onClick={handlePrev}>
                            &lt;
                        </div>
                    </Col>
                    <Col xs={12} md={9.1}>
                        <Row className='justify-content-center'>
                            {visibleItems.map((item, index) => (
                                <Col xs={12} md={6} lg={4} className='d-flex justify-content-center mb-3' key={index}>
                                    <motion.div variants={cardVariant}>
                                        <Card className={`custom-card ${index === 1 ? 'active' : ''}`} style={{ background: '#253530', width: '100%' }}>
                                            <motion.img variants={cardVariant} src={item.img} className='custom-card-img' />
                                            <Card.Body className='project-card-body' style={{ color: '#c0bebe' }}>
                                                <motion.h5 className='project-title' variants={cardVariant}><strong>{item.title}</strong></motion.h5>
                                                <motion.p className='project-text' variants={cardVariant}>{item.text}</motion.p>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={12} md={2} className='d-flex align-items-center justify-content-center'>
                        <div className='carousel-control-next' onClick={handleNext}>
                            &gt;
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

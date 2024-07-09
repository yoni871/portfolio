import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // Import icons from React Icons
import emailjs from 'emailjs-com';
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

export default function Contacts() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_2gewf0f', 'template_tx34yuo', formData, 'vUMlkqK2djcMjNk7i')
      .then((response) => {
        console.log('SUCCESS', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message.');
      });
  };

  return (
    <motion.div
      className='contacts'
      id='contacts'
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      <Container>
        <Row className='mb-5 mt-3'>
          <Col lg='8'>
            <motion.h1 className='display-4 mb-4' style={{ color: '#c6c7ca' }} variants={textVariant}>Contact Me</motion.h1>
          </Col>
        </Row>

        <Row className='sec-sp'>
          <Col lg='5' className='mb-5'>
            <motion.h3 className='py-4' style={{ color: '#c6c7ca' }} variants={textVariant}>Get in touch</motion.h3>
            <motion.div variants={textVariant}>
              <address>
                <strong style={{ color: '#c6c7ca' }}>
                  <AiOutlineMail />&nbsp;&nbsp;&nbsp; Yonatan.ademissie@gmail.com
                </strong>
                <br />
                <br />
                <p>
                  <strong style={{ color: '#c6c7ca' }}>
                    <AiOutlinePhone />&nbsp;&nbsp;&nbsp; +1 (512)-529-2213
                  </strong>
                </p>
              </address>
            </motion.div>
          </Col>
          <Col lg='7' className='d-flex align-items-center'>
            <motion.form className='contact_form w-100' onSubmit={handleSubmit} variants={textVariant}>
              <Row>
                <Col lg='6' className='form-group'>
                  <input
                    className='form-control'
                    id='name'
                    name='name'
                    placeholder='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Col>
                <Col lg='6' className='form-group'>
                  <input
                    className='form-control rounded-0'
                    id='email'
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className='form-control rounded-0'
                id='message'
                name='message'
                placeholder='Message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
              />
              <br />
              <Row>
                <Col lg='12' className='form-group'>
                  <button className='btn ac_btn' type='submit' style={{ color: '#c6c7ca' }}>Send</button>
                </Col>
              </Row>
            </motion.form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

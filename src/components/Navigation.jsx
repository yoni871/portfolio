import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../App.css'
import portfolioPic from '../icons/portfolio.png'

export default function Navigation() {
  return (
    <>
    <Navbar expand="md" className='navbar fixed-top' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src = {portfolioPic}
            alt='portfolio'
            width={50}
            height={50}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className='navbarlink'>Home</Nav.Link>
          <Nav.Link href="#about" className='navbarlink'>About</Nav.Link>
          <Nav.Link href="#skills" className='navbarlink'>Skills</Nav.Link>
          <Nav.Link href="#contacts" className='navbarlink'>Contacts</Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/1gXo1nXL11XbiNsYWlplmVMjxFPGovfLs/edit" target="_blank" className='navbarlink resume-link'>RESUME</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    </>
  )
}

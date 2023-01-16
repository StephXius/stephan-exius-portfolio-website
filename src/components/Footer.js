import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/github-icon.png';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                  <p className='footer-brand-name'>Stephan Exius</p> 
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/stephan-exius-01953b156/'><img src={navicon1} /></a>
                        <a href='https://github.com/StephXius'><img src={navicon2} /></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navicon1 from '../assets/img/nav-icon1.svg';

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
                        <a href=''><img src={navicon1} /></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

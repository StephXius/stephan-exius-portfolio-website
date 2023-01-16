import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import clockImg from '../assets/img/25+5-clock-fcc-cover.jpg';
import calcImg from '../assets/img/calculator-app-cover.jpg';
import drumImg from '../assets/img/drum-machine-cover.jpg';
import markImg from '../assets/img/my-react-markdown-previewer-cover.jpg';
import quoteImg from '../assets/img/random-quote-generator-cover.jpg';
import rpsImg from '../assets/img/rock-paper-scissors-cover.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = 
    [
        {
            title: "25-5-clock-fcc",
            description: "Web Development",
            imgUrl: clockImg,
          },
          {
            title: "calculator-app-react-fcc",
            description: "Web Development",
            imgUrl: calcImg,
          },
          {
            title: "drum-machine-fcc",
            description: "Web Development",
            imgUrl: drumImg,
          },
          {
            title: "my-react-markdown-previewer",
            description: "Web Development",
            imgUrl: markImg,
          },
          {
            title: "random-quote-generator",
            description: "Web Development",
            imgUrl: quoteImg,
          },
          {
            title: "rockpaperscissor",
            description: "Web Development",
            imgUrl: rpsImg,
          },
    ];

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ''}>
                    <h2>Projects</h2>
                    <p>These are my projects that I have done recently. They were coded in HTML, CSS, JavaScript and React</p>
                    </div>}
                       </TrackVisibility>
                    <Tab.Container id='projects-tab' defaultActiveKey='first'>
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'> Work in Progress
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'> Work in Progress </Tab.Pane> 
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}


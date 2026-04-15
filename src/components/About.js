import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Section from './Section';

function About({ highlights }) {
  return (
    <Section id="about" title="About Me" subtitle="Creative developer">
      <Row className="gx-5 align-items-center">
        <Col lg={7}>
          <p className="lead mb-4">
            .NET Full Stack Developer with 2+ years of hands-on experience delivering enterprise solutions in the logistics domain. Skilled in developing backend services, building interactive React front ends, and supporting production applications.
          </p>
          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="about-highlight">
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={5}>
          <div className="about-card p-4 shadow-sm border-0">
            <h5>What I bring to your team</h5>
            <ul className="list-unstyled mt-3">
              <li>Fast, responsive front-end development</li>
              <li>Reusable component architecture</li>
              <li>Design-driven problem solving</li>
            </ul>
            <Button href="#contact" variant="outline-primary" className="mt-3">
              Let's connect
            </Button>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default About;
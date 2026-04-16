import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from './Section';
import ExperienceCard from './ExperienceCard';

function Experience({ experiences }) {
  return (
    <Section id="experience" title="Experience" subtitle="Professional background">
      <Row className="g-4">
        {experiences.map((experience) => (
          <Col key={`${experience.role}-${experience.company}`} md={6}>
            <ExperienceCard {...experience} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default Experience;

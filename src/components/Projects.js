import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Section from './Section';
import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <Row className="g-4">
        {projects.map((project) => (
          <Col md={6} lg={6} key={project.title}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default Projects;
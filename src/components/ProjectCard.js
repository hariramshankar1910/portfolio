import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

function ProjectCard({ title, description, tech, link }) {
  return (
    <Card className="project-card h-100 shadow-sm border-0">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mb-3">
          {tech.map((item) => (
            <Badge bg="secondary" pill className="me-1 mb-1" key={item}>
              {item}
            </Badge>
          ))}
        </div>
        <Button variant="outline-primary" href={link} target="_blank" rel="noreferrer">
          View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

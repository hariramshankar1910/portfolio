import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function ExperienceCard({ role, company, period, location, highlights }) {
  return (
    <Card className="experience-card h-100 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3 flex-column flex-md-row">
          <div>
            <Card.Title>{role}</Card.Title>
            <Card.Subtitle className="text-muted">{company}</Card.Subtitle>
          </div>
          <div className="text-md-end mt-3 mt-md-0">
            <small className="text-muted d-block">{period}</small>
            <small className="text-muted">{location}</small>
          </div>
        </div>
        <ListGroup variant="flush">
          {highlights.map((item, index) => (
            <ListGroup.Item key={index} className="ps-0 border-0 px-0">
              • {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;

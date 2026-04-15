import React from 'react';
import { Badge } from 'react-bootstrap';
import Section from './Section';

function Skills({ skillCategories }) {
  return (
    <Section id="skills" title="Skills" subtitle="What I work with">
      <div className="skill-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.category}>
            <h5>{category.category}</h5>
            <div className="skill-badge-list">
              {category.skills.map((skill) => (
                <Badge bg="secondary" pill key={skill} className="skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
import React from 'react';
import Section from './Section';

function Experience({ experiences }) {
  return (
    <Section id="experience" title="Experience" subtitle="Professional background">
      <div className="timeline">
        {experiences.map((experience) => (
          <div className="timeline-item" key={experience.role}>
            <span className="timeline-marker" />
            <div className="timeline-content shadow-sm border-0 bg-white rounded-4 p-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                <div>
                  <h5>{experience.role}</h5>
                  <p className="mb-1 text-muted">{experience.company}</p>
                </div>
                <span className="timeline-period text-primary">{experience.period}</span>
              </div>
              <ul className="timeline-list mt-3 mb-0">
                {experience.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
import React from 'react';
import { Container } from 'react-bootstrap';

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="section-header text-center text-md-start">
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <h2>{title}</h2>
        </div>
        {children}
      </Container>
    </section>
  );
}

export default Section;

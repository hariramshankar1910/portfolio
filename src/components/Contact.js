import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Section from './Section';

function Contact({ contact }) {
  const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}&body=${encodeURIComponent(contact.body)}`;

  return (
    <Section id="contact" title="Contact" subtitle="Let's work together">
      <Row className="g-4">
        <Col md={6}>
          <div className="contact-card p-4 shadow-sm border-0">
            <h3>Get in touch</h3>
            <p className="text-muted">
              I'm open to new opportunities, collaboration, and freelance work. Send a message and I'll respond as soon as possible.
            </p>
            <ul className="list-unstyled contact-list">
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer">
                  {contact.linkedInLabel}
                </a>
              </li>
              <li>
                <strong>Location:</strong> {contact.location}
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-banner p-4 shadow-lg border-0">
            <h3>Ready to build something great?</h3>
            <p>
              Whether you need a portfolio refresh, a product landing page, or a complete web app,
              I can help deliver an experience your users will enjoy.
            </p>
            <Button href={mailtoLink} variant="light">
              Email Me
            </Button>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Contact;

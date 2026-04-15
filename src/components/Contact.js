import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Section from './Section';

function Contact() {
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
                <strong>Email:</strong> <a href="mailto:hariram19102000@gmail.com">hariram19102000@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/hariram-shankar-g-4ab8221b0" target="_blank" rel="noreferrer">hariram-shankar-g-4ab8221b0</a>
              </li>
              <li>
                <strong>Location:</strong> Chennai
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
            <Button href="mailto:hariram19102000@gmail.com?subject=.NET%20Full%20Stack%20Developer%20Position%20-%20Hariram%20Shankar%20G&body=Dear%20Hariram%20Shankar%20G,%0A%0AI%20came%20across%20your%20impressive%20portfolio%20website%20and%20was%20particularly%20impressed%20by%20your%20experience%20in%20.NET%20Full%20Stack%20development,%20especially%20your%20work%20with%20logistics%20domain%20solutions,%20EDI,%20BizTalk,%20and%20production%20support.%0A%0AWe%20are%20currently%20looking%20for%20a%20skilled%20.NET%20developer%20to%20join%20our%20team.%20Your%20background%20in%20C%23,%20.NET%20Core,%20React%20JS,%20and%20SQL%20Server%20aligns%20perfectly%20with%20our%20project%20requirements.%0A%0AI%20would%20love%20to%20discuss%20potential%20opportunities%20and%20learn%20more%20about%20your%20experience.%20Are%20you%20available%20for%20a%20quick%20call%20or%20meeting?%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards," variant="light">
              Email Me
            </Button>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Contact;
import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <p className="eyebrow">Hi, I’m</p>
            <h1>Hariram Shankar.G<span className="text-primary"></span></h1>
            <p className="hero-copy">
              .NET Full Stack Developer with 2+ years of experience in C#, .NET Core, Web API, React JS, and SQL Server.
            </p>
            <div className="hero-actions">
              <Button href="#contact" variant="primary" className="me-3">
                Hire Me
              </Button>
              <Button href="#projects" variant="outline-light">
                View Projects
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <Card className="hero-card shadow-lg border-0">
              <Card.Body>
                <div className="hero-card-badge">.NET Full Stack Developer</div>
                <h5>Logistics domain expert</h5>
                <p className="mb-4">
                  Experienced in logistics, EDI, BizTalk, and production support across enterprise-grade solutions.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="secondary">C#</Badge>
                  <Badge bg="secondary">.NET Core</Badge>
                  <Badge bg="secondary">SQL Server</Badge>
                  <Badge bg="secondary">React JS</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

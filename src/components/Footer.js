import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-light py-4">
      <Container>
        <div className="text-center">
          <p className="mb-0 text-muted">
            © 2024 Hariram Shankar G. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
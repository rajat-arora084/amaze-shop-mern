import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageFooter = () => {
  return (
    <footer className="d-flex justfy-content-center ">
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy;</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PageFooter;

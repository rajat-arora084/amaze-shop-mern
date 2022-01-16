import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const PageHeader = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">AmazeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="fas fa-shopping-cart">
                Cart
              </Nav.Link>
              <Nav.Link href="/login" className="fas fa-user">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default PageHeader;

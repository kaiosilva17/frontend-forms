import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/anime">Anime</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/anime">Animes</Nav.Link>
            <Nav.Link href="/anime/generos">Generos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Cabecalho
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/cursos">Cursos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
            <Nav.Link href="/salas">Salas</Nav.Link>
            <Nav.Link href="/semestres">Semestres</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Cabecalho
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link className='navbar-brand' to='/'>MartPk</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link'>Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

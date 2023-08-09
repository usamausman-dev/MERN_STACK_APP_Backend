import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';

export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link className='navbar-brand' to='/'>MartPk</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/brands' className='nav-link'>Brands</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/category' className='nav-link'>Category</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                        <Link to='/profile' className="btn btn-outline-dark d-flex align-items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                            Profile
                        </Link>
                        <Link to='/cart' className='nav-link'>Cart</Link>

                        <button className="btn btn-dark"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}

                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

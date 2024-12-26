import React from 'react'
import Footer from './Footer'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoBagHandleOutline, IoSearch } from 'react-icons/io5'
import Subscribe from './Subscribe'

function OrderSuccess() {
    const isLogged = sessionStorage.getItem('isLogged');
    return (
        <>
            <Navbar expand="lg" className="bg-body-success my-2 bg-dark padding-12 ">
                <Container>
                    <Navbar.Brand href="#home" className='logo'><Link to="/"><img src={require('../Compnnents/Routs/img/asset 0.png')} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar m-auto">
                            <Nav.Link className='navitems' to='/'>
                                <Link to="/" className='page for-blackcolor'>Home</Link>
                            </Nav.Link>
                            <Nav.Link className='navitems' to='/Shop'>
                                <Link to="/Shop" className='page for-blackcolor'>Shop</Link>
                            </Nav.Link>
                            <Nav.Link className='navitems' to='/About'>
                                <Link to="/About" className='page for-blackcolor'>About</Link>
                            </Nav.Link>
                            <Nav.Link className='navitems' to='/Contact'>
                                <Link to="/Contact" className='page for-blackcolor'>Contact</Link>
                            </Nav.Link>
                            {
                                !isLogged ?
                                    <Nav.Link className='navitems' to='/UserLogin'>
                                        <Link to="/UserLogin" className='page'>Login</Link>
                                    </Nav.Link> : null
                            }
                        </Nav>
                        <div className='all-icons text-center d-flex justify-content-center align-items-center'>
                            <IoSearch className='icon' />
                            <Link to='AddToCart'>
                                <IoBagHandleOutline className='icon' />
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="card mt-5">
                <div
                    style={{
                        borderRadius: 200,
                        height: 200,
                        width: 200,
                        background: "#F8FAF5",
                        margin: "0 auto"
                    }}
                >
                    <i className="checkmark">✓</i>
                </div>
                <h1>Order Success</h1>
                <p>
                    We received your purchase request;
                    <br /> we'll be in touch shortly!
                </p>
            </div>
            <div className="container">
                <hr className='hr-black' />
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default OrderSuccess
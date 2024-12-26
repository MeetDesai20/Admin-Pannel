import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
import Block from '../Block';
import Quotes from '../Quotes';
import Subscribe from '../Subscribe';
import Footer from '../Footer';


const About = () => {
    const isLoged = sessionStorage.getItem('isLogged')
    return (
        <>
            <div>
                <div className='menu'>
                    <Navbar expand="lg" className="bg-body-success my-2">
                        <Container>
                            <Navbar.Brand href="#home" className='logo'><Link to="/"><img src={require('./img/asset 0.png')} alt="" /></Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="navbar m-auto">
                                    <Nav.Link className='navitems' to='/'>
                                        <Link to="/" className='page'>Home</Link>
                                    </Nav.Link>
                                    <Nav.Link className='navitems' to='/Shop'>
                                        <Link to="/Shop" className='page'>Shop</Link>
                                    </Nav.Link>
                                    <Nav.Link className='navitems' to='/About'>
                                        <Link to="/About" className='page'>About</Link>
                                    </Nav.Link>
                                    <Nav.Link className='navitems' to='/Contact'>
                                        <Link to="/Contact" className='page'>Contact</Link>
                                    </Nav.Link>
                                    {
                                        !isLoged ? <Nav.Link className='navitems' to='/Contact'>
                                            <Link to="/UserLogin" className='page'>Login</Link>
                                        </Nav.Link> : null
                                    }
                                </Nav>
                                <div className='all-icons text-center d-flex justify-content-center align-items-center'>
                                    <IoSearch className='icon' />
                                    <Link to='/AddToCart'>
                                        <IoBagHandleOutline className='icon' />
                                    </Link>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <hr />
                </div>
            </div>
            <div className='parallax2'>
                <h1 className='shop-hed'>About Us</h1>
            </div>

            <div className='container block-body'>
                <Block />
            </div>

            <Quotes />

            <Subscribe />

            <Footer />
        </>
    )
};

export default About;
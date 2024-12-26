
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
// import Product from '../Product';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
    const [data, setData] = useState([])
    const res = data.slice(0, 13)
    const isLogged = sessionStorage.getItem('isLogged');
    useEffect(() => {
        axios.get(`http://localhost:5000/admin/getallproduct`)
            .then(function (response) {
                // console.log(response.data.productData);
                setData(response.data.productData)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <>
            <div>
                <div className='menu'>
                    <Navbar expand="lg" className="bg-body-success my-2">
                        <Container>
                            <Navbar.Brand href="#home" className='logo'><Link to="/"><img src={require('./img/asset 0.png')} alt="" /></Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="navbar me-auto">
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
                                        !isLogged ?
                                            <Nav.Link className='navitems' to='/UserLogin'>
                                                <Link to="/UserLogin" className='page'>Login</Link>
                                            </Nav.Link> : null
                                    }
                                </Nav>
                                <div className='all-icons text-center d-flex justify-content-center align-items-center'>
                                    <IoSearch className='icon' />
                                    <Link to="/AddToCart">
                                        <IoBagHandleOutline className='icon' />
                                    </Link>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <hr />
                </div>
            </div>
            <div className='parallax1'>
                <h1 className='shop-hed'>Our Shop</h1>
            </div>

            {/*------------------------- Shop ----------------------------------------------------------*/}

            <div className='container'>
                <div className="products-text text-center pt-5 psss">
                    <p>NEW AND EXTRAORDINARY</p>
                    <h2>Featured Products</h2>
                </div>
                <div className="row">
                    {
                        res.map((iteam) => {
                            return (
                                <>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xsm-6 col-6 mt-3 h-100">
                                        <Link to={`/SingleProduct/${iteam._id}`}>
                                            <img src={iteam.image[0]} alt="" height={'70%'} width={'95%'} />
                                            <div className="card-info text-center">
                                                <h4>{iteam.title}</h4>
                                                <p>&#x20B9; {iteam.price}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='pt-3 pb-5 text-center'>
                    <button className='viewall'>VIEW ALL</button>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    )
};

export default Shop;
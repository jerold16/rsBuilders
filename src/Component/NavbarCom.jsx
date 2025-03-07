import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

const NavbarCom = () => {
    let expand = 'lg'
    let [show, setshow] = useState(false)
    return (
        <div className=' ' >
            <Navbar key={expand} expand={expand} className="bg-transparent mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={require('../Assets/rsbuildersLogo.png')} alt="Logo" className='w-[100px] ' loading='lazy' />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setshow(true)} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas

                        // id={`offcanvasNavbar-expand-${expand}`}
                        show={show}
                        onHide={() => setshow(false)}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src={require('../Assets/rsbuildersLogo.png')} alt="Logo" className='w-[100px] ' loading='lazy' />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end gap-lg-4 flex-grow-1 pe-3">
                                <Nav.Link onClick={(e) => {setshow(false)}} href="#home" >
                                    <button className=' text-slate-800 fw-medium poppins '  > Home </button>
                                </Nav.Link>
                                <Nav.Link onClick={(e) => {setshow(false)}} href="#about" >
                                    <button className=' text-slate-800 fw-medium poppins '  > About </button>
                                </Nav.Link>
                                <Nav.Link onClick={(e) => {setshow(false)}} href="#service" >
                                    <button className=' text-slate-800 fw-medium poppins '  > Service </button>
                                </Nav.Link>
                                <Nav.Link onClick={(e) => {setshow(false)}} href="#project" >
                                    <button className=' text-slate-800 fw-medium poppins '  > Project </button>
                                </Nav.Link>
                                <Nav.Link onClick={(e) => {setshow(false)}} href="#contact" >
                                    <button className=' text-slate-800 fw-medium poppins '  > Contact </button>
                                </Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarCom
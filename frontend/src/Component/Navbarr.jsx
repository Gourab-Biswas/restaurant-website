import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbarr.css"
const Navbarr = () => {
  return (
    <div>
        <header>
                <Navbar expand="lg" className="bg-body-tertiary" id='navbarrr'>
                    <Container fluid >
                        <img id='logo' src='/logo.jpg'></img>

                        <Navbar.Brand id='logo-name' href="/"> THE HUNGRY HEAVEN</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <Nav.Link href="/" className='nav-ele'><b>Home</b></Nav.Link>
                                <Nav.Link href="/About" className='nav-ele'><b>About</b></Nav.Link>
                                <Nav.Link href="/Contact" className='nav-ele'><b>Contact</b></Nav.Link>


                                <NavDropdown title="Menu" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/Bengali"><b>Bengali</b></NavDropdown.Item>
                                    <NavDropdown.Item href="/Chinese"><b>Chineese</b></NavDropdown.Item>
                                    <NavDropdown.Item href="/South"><b>South Indian</b></NavDropdown.Item>
                                    {/* <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item> */}
                                </NavDropdown>


                                {/* <button class='glow-on-hover'>Book Table</button> */}





                                <Form className="lex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success"><b>Search</b></Button>
                                </Form>



                                <NavDropdown title="Login/Signup" id="logsin">
                                    <NavDropdown.Item href="/Login"><b>Login</b></NavDropdown.Item>
                                    <NavDropdown.Item href="/Signup"> <b>Signup</b></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
    </div>
  )
}

export default Navbarr
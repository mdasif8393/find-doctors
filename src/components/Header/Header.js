
import React from 'react';

import { Button, Card, Form, FormControl, Nav, Navbar, NavDropdown, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div style={{marginBottom:'50px'}}>
                <Navbar bg="light" fixed="top" >
                    <Navbar.Brand href="#home" style={{marginRight:'175px', }}>Find Doctots In Khulna City</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/home"><Nav.Link href="#home" >Home</Nav.Link></Link>

                        <NavDropdown title="Find Doctots By Fee" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/ThreeHundredTaka">300 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/FourHundredTaka">400 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/FiveHundredTaka">500 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/SixHundredTaka">600 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/SevenHundredTaka">700 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/EightHundredTaka">800 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/TenHundredTaka">1000 Taka</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Specialty" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Medicine</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gynecology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Surgery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Orthopedics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Child</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Skin</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dental</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Oncology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ENT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Eye</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Neurology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nephrology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Endocrinology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cardiology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Urology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Hepatology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gastroenterology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hepatology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hepatology</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Designation" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Professor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Associate Professor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Assistant Professor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Senior Consultant</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Junior Consultant</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Consultant</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Medical Officer</NavDropdown.Item>
                        </NavDropdown>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            
        </div>
    );
};

export default Header;
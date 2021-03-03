
import React from 'react';
import logo from '../../images/logo.png'

import { Button, Card, Form, FormControl, Nav, Navbar, NavDropdown, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div style={{marginBottom:"100px"}}>
                <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{backgroundColor:"#F0FFF0"}}>
                    <Navbar.Brand href="#home" style={{marginRight:'175px', }}><img style={{height:"30px"}} src={logo} alt=""/><span style={{color:"#0275d8", fontWeight:"bold"}}>Doctors of Khulna City</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/home"><Nav.Link href="#home" >Home</Nav.Link></Link>

                            <NavDropdown  title= "Find Doctots By Fee" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/ThreeHundredTaka">300 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/FourHundredTaka">400 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/FiveHundredTaka">500 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/SixHundredTaka">600 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/SevenHundredTaka">700 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/EightHundredTaka">800 Taka</NavDropdown.Item>
                            <NavDropdown.Item href="/TenHundredTaka">1000 Taka</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Specialty" id="basic-nav-dropdown">
                            <NavDropdown.Item href="Medicine">Medicine</NavDropdown.Item>
                            <NavDropdown.Item href="Gynecology">Gynecology</NavDropdown.Item>
                            <NavDropdown.Item href="Surgery">Surgery</NavDropdown.Item>
                            <NavDropdown.Item href="Orthopedics">Orthopedics</NavDropdown.Item>
                            <NavDropdown.Item href="Child">Child</NavDropdown.Item>
                            <NavDropdown.Item href="Skin">Skin</NavDropdown.Item>
                            <NavDropdown.Item href="Dental">Dental</NavDropdown.Item>
                            <NavDropdown.Item href="ENT">ENT</NavDropdown.Item>
                            <NavDropdown.Item href="Eye">Eye</NavDropdown.Item>
                            <NavDropdown.Item href="Cardiology">Cardiology</NavDropdown.Item>
                            <NavDropdown.Item href="Gastroenterology">Gastroenterology</NavDropdown.Item>
                            <NavDropdown.Item href="Oncology">Oncology</NavDropdown.Item>
                            <NavDropdown.Item href="Neurology">Neurology</NavDropdown.Item>
                            <NavDropdown.Item href="Nephrology">Nephrology</NavDropdown.Item>
                            <NavDropdown.Item href="Endocrinology">Endocrinology</NavDropdown.Item>
                            <NavDropdown.Item href="Urology">Urology</NavDropdown.Item>
                            <NavDropdown.Item href="Hepatology">Hepatology</NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Designation" id="basic-nav-dropdown">
                            <NavDropdown.Item href="Professor">Professor</NavDropdown.Item>
                            <NavDropdown.Item href="AssociateProfessor">Associate Professor</NavDropdown.Item>
                            <NavDropdown.Item href="AssistantProfessor">Assistant Professor</NavDropdown.Item>
                            <NavDropdown.Item href="Consultant">Consultant</NavDropdown.Item>
                            <NavDropdown.Item href="MedicalOfficer">Medical Officer</NavDropdown.Item>
                        </NavDropdown>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            
        </div>
    );
};

export default Header;
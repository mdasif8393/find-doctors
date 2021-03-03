
import React from 'react';
import logo from '../../images/logo.png'

import { Button, Card, Form, FormControl, Nav, Navbar, NavDropdown, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div style={{marginBottom:"100px"}}>
                <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{backgroundColor:"#F0FFF0"}}>
                    <Navbar.Brand href="#home" style={{marginRight:'175px', marginLeft:'60px', }}><img style={{height:"30px"}} src={logo} alt=""/><span style={{color:"#21B573", fontWeight:"bold"}}>Doctors of Khulna City</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/home"><Nav.Link href="#home" >Home</Nav.Link></Link>

                            <NavDropdown  title= "Find Doctots By Fee" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/ThreeHundredTaka">300 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/FourHundredTaka">400 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/FiveHundredTaka">500 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/SixHundredTaka">600 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/SevenHundredTaka">700 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/EightHundredTaka">800 Taka</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/TenHundredTaka">1000 Taka</Link></NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Specialty" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/Medicine">Medicine</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Gynecology">Gynecology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Surgery">Surgery</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Orthopedics">Orthopedics</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Child">Child</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Skin">Skin</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Dental">Dental</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/ENT">ENT</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Eye">Eye</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Cardiology">Cardiology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Gastroenterology">Gastroenterology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Oncology">Oncology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Neurology">Neurology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Rheumatology">Rheumatology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Endocrinology">Endocrinology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Urology">Urology</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Hepatology">Hepatology</Link></NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown title="Find Doctots By Designation" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/Professor">Professor</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/AssociateProfessor">Associate Professor</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/AssistantProfessor">Assistant Professor</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Consultant">Consultant</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/MedicalOfficer">Medical Officer</Link></NavDropdown.Item>
                        </NavDropdown>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            
        </div>
    );
};

export default Header;
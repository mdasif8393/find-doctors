import React from 'react';
import { Button, Card, CardDeck, Col, Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div >
            <CardDeck >
                <Card bg="light" border="info">
                    <Card.Img variant="top" src="https://ibb.co/bL3JST8" />
                    <Card.Body>
                    <Card.Title>BROWSE DOCTORS BY THEIR FEE</Card.Title>
                    <Card.Text>
                        <Link to="/ThreeHundredTaka"><Button variant="outline-info" size="lg" block>300 Taka</Button></Link> 
                        <Link to="/FourHundredTaka"><Button variant="outline-info" size="lg" block>400 Taka</Button></Link> 
                        <Link to="/FiveHundredTaka"><Button variant="outline-info" size="lg" block>500 Taka</Button></Link>
                        <Link to="/SixHundredTaka"><Button variant="outline-info" size="lg" block>600 Taka</Button></Link>
                        <Link to="/SevenHundredTaka"><Button variant="outline-info" size="lg" block>700 Taka</Button></Link>
                        <Link to="/EightHundredTaka"><Button variant="outline-info" size="lg" block>800 Taka</Button></Link>
                        <Link to="/TenHundredTaka"><Button variant="outline-info" size="lg" block>1000 Taka</Button></Link>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" border="info">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>BROWSE DOCTORS BY THEIR SPECIALTY</Card.Title>
                    <Card.Text>
                        <Button variant="outline-info" size="lg" block>
                                Medicine
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Gynecology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Surgery
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Orthopedics
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Child
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Skin
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Dental
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Oncology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                ENT
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Eye
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Neurology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Nephrology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Rheumatology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Endocrinology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Cardiology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Urology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Hepatology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Gastroenterology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Hepatology
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                                Hepatology
                        </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="light" border="info">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>BROWSE DOCTORS BY THEIR DESIGNATION</Card.Title>
                    <Card.Text>
                        <Button variant="outline-info" size="lg" block>
                            Professor
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Associate Professor
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Assistant Professor
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Senior Consultant
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Junior Consultant
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Consultant
                        </Button>
                        <Button variant="outline-info" size="lg" block>
                            Medical Officer
                        </Button>
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardDeck>
        </div>
    );
};

export default Body;
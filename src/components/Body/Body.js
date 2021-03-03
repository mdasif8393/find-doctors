import React from 'react';
import { Button, Card, CardDeck, Col, Container, Image, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctors from '../../images/doctors.jpg'
import money from '../../images/money.jpg'
import doctor from '../../images/doctor.png'

const Body = () => {
    return (
        <div >
            <CardDeck >
                <Card border="info" style={{boxShadow: "10px 10px 20px lightgray"}} style={{backgroundColor:"#F0FFF0"}}>
                
                    <Card.Body style={{boxShadow: "10px 10px 20px lightgray"}}>
                    <Image style={{height:"150px", width:"170px", marginLeft:"65px", marginRight:"auto"}} src={money} roundedCircle fluid />
                    <Card.Title style={{color:"#21B573", fontWeight:"bold", textAlign:"center"}}>FIND DOCTOTS BY FEE</Card.Title>
                    <Card.Text>
                        <Link to="/ThreeHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>300 Taka</Button></Link> 
                        <Link to="/FourHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>400 Taka</Button></Link> 
                        <Link to="/FiveHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>500 Taka</Button></Link>
                        <Link to="/SixHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>600 Taka</Button></Link>
                        <Link to="/SevenHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>700 Taka</Button></Link>
                        <Link to="/EightHundredTaka"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>800 Taka</Button></Link>
                        <Link to="/TenHundredTaka"><Button  style={{marginBottom:"8px"}}variant="outline-info" size="lg" block>1000 Taka</Button></Link>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="info" style={{boxShadow: "10px 10px 20px lightgray"}} style={{backgroundColor:"#F0FFF0"}}>
                    <Image style={{height:"150px", width:"150px", marginLeft:"auto", marginRight:"auto"}} src={doctors} roundedCircle fluid />
                    <Card.Body style={{boxShadow: "10px 10px 20px lightgray"}}>
                    <Card.Title style={{color:"#21B573", fontWeight:"bold", textAlign:"center"}}>FIND DOCTORS BY SPECIALTY</Card.Title>
                    <Card.Text>
                    <Link to="/Medicine"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Medicine</Button></Link>
                    <Link to="/Gynecology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Gynecology</Button></Link>
                    <Link to="/Surgery"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Surgery</Button></Link>
                    <Link to="/Orthopedics"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Orthopedics</Button></Link>
                    <Link to="/Child"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Child</Button></Link>
                    <Link to="/Skin"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Skin</Button></Link>
                    <Link to="/Dental"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Dental</Button></Link>
                    <Link to="/Ent"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>ENT</Button></Link>
                    <Link to="/Eye"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Eye</Button></Link>
                    <Link to="/Cardiology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Cardiology</Button></Link>
                    <Link to="/Gastroenterology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Gastroenterology</Button></Link>
                    <Link to="/Oncology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Oncology</Button></Link>
                    <Link to="/Neurology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Neurology</Button></Link>
                    <Link to="/Rheumatology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Rheumatology</Button></Link>
                    <Link to="/Endocrinology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Endocrinology</Button></Link>
                    <Link to="/Urology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Urology</Button></Link>
                    <Link to="/Hepatology"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Hepatology</Button></Link>
  

                    </Card.Text>
                    </Card.Body >
                </Card>

                <Card border="info" style={{boxShadow: "10px 10px 20px lightgray"}} style={{backgroundColor:"#F0FFF0"}}>
                <Image style={{height:"150px", width:"130px", marginLeft:"auto", marginRight:"auto"}} src={doctor} roundedCircle fluid />
                    <Card.Body style={{boxShadow: "10px 10px 20px lightgray"}}>
                    <Card.Title style={{color:"#21B573", fontWeight:"bold", textAlign:"center"}}>FIND DOCTORS BY DESIGNATION</Card.Title>
                    <Card.Text>
                        <Link  to="/Professor"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Professor</Button></Link>
                        <Link to="/AssociateProfessor"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Associate Professor</Button> </Link>
                        <Link to="/AssistantProfessor"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Assistant Professor</Button> </Link>
                        <Link to="/Consultant"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Consultant</Button> </Link>
                        <Link to="/MedicalOfficer"><Button style={{marginBottom:"8px"}} variant="outline-info" size="lg" block>Medical Officer</Button> </Link>
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardDeck>
        </div>
    );
};

export default Body;
import React from 'react';
import { Button, Card, CardDeck, Col, Container, Jumbotron, Row, } from 'react-bootstrap';
import Header from '../Header/Header';

const Hepatology = () => {
    return (
        <div>
            <Container>
                <Header></Header>

                <Jumbotron  style={{boxShadow: "10px 10px 20px lightgray", backgroundColor:"#F0FFF0"}}>
                    <h1 style={{color: '#A52A2A'}}>Dr. Golam Masud</h1>
                    <h5>
                        Degree: <span style={{color: '#A52A2A'}}>MBBS, MD (Hepatology)</span>
                    </h5>
                    <h5>
                        Department: <span style={{color: '#A52A2A'}}>Hepatology</span>
                    </h5>
                    <h5>
                        Specialty: <span style={{color: '#A52A2A'}}>Hepatology Specialist</span>
                    </h5>
                    <h5>
                        Designation: <span style={{color: '#A52A2A'}}>Assistant Professor</span>
                    </h5>
                    <h5>
                        Chamber Address: <span style={{color: '#A52A2A'}}>Islami Bank Hospital, 42, Khan Jahan Ali Road, Khulna</span>
                    </h5>
                    <h5>
                        Contact Number: <span style={{color: '#A52A2A'}}></span>
                    </h5>
                    <h5>
                        Visiting Hour: <span style={{color: '#A52A2A'}}>+88041733913</span>
                    </h5>
                    <h5>
                        Fee: <span style={{color: '#A52A2A'}}>600 Taka</span>
                    </h5>
                </Jumbotron>



            </Container>
        </div>
    );
};

export default Hepatology;
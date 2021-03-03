
import React from 'react';
import { Button, Card, Carousel, Col, Container, Row, } from 'react-bootstrap';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../Info/Info';
const Home = () => {
    return (
      
        <div>
          <Container >
          <Header>
          </Header>

          <Info></Info>

            <Body>
            </Body>
            
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Home;
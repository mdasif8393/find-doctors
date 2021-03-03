import React from 'react';
import { Button, Card, CardDeck, Col, Container, Image, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mail from "../../images/mail.png"

const Footer = () => {
    return (
        <div style={{backgroundColor:"#282531", color:"white", height:"120px", marginTop:"30px",  paddingTop: "30px", PaddingLeft: "60px", paddingRight: "60px",  textAlign: "center"}}>
            <p>Developed by: MD. Asif Zaman</p>
            <p> <Image style={{height:"20px", width:"20px", }} src={mail} roundedCircle fluid /> md.asif.8393@gmail.com</p>
        </div>
    );
};

export default Footer;
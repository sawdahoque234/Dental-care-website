import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div>
  
  <Row id="footer1" className="mt-5">
<Col><p href="#home" className="fst-italic fw-bolder text-white text-decoration-underline mx-3 mt-3"><img src={logo} id="logo" alt="" /> DentalCare</p></Col>
    <Col className="text-white mt-3">All Right Reserved.@dentalcare 2021</Col>
                <Col className="text-white mt-3">
                   
<FontAwesomeIcon icon={faEnvelope } className="mx-2"/>Email:dcmail@email.com
<FontAwesomeIcon icon={faPhone} className="mx-2" />: + 1 800 755 60
</Col>
  </Row>
        </div>
    );
};

export default Footer;
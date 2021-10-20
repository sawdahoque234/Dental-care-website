import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './interseted.css'


const Interested = () => {
    return (
        <>
    <container >
                <Row id="body1" className="p-4 text-white rounded-pill">
                    <h4 className="text-lg-start fw-bold mx-4 px-4">Interested?</h4>
    <Col className="fw-bolder fs-4 mx-3">CONTACT US AND SCHEDULE YOUR VISIT</Col>
    <Col><button className="btn btn-white bg-white px-3 fw-bolder m-2"><Link className="text-decoration-none fst-italic" to="/contactus">Contact Us</Link> </button></Col>
  </Row>
 
</container>
        </>
    );
};

export default Interested;
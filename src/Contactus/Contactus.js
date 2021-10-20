import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { FaFacebook ,FaLinkedinIn,FaTwitterSquare,FaTelegram} from "react-icons/fa";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'

const Contactus = () => {
    return (
        <>
            <Container>
                <h4 className="fw-bold fst-italic text-primary fs-2 my-2 text-uppercase text-decoration-underline py-5 text-lg-center">Contact Us</h4>
                <Row className="py-3">
                    <Col sm={6}>
                        <img className="img-fluid rounded-3 py-3" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/10/shutterstock_118733071-1200x800.jpg" alt="" />
                    </Col>
                    <Col sm={6}>
                        <p className="fw- text-info fw-bolder fst-italic fs-2">CONTACT US ANYTHING</p>
                        <div className="w-75 mx-auto d-block">
                        <Form>
                        <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="your full name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="comments/question*" rows={5} />
                                </Form.Group>
                                <Button variant="primary">Send Now</Button>
                        </Form>
                    </div>
                    </Col>
  </Row>
  
            </Container>
            <Container>
  <Row id="hd2">
                    <Col sm={5}><h4 className="text-white mt-3">Working Hours</h4>
                        <br />
                        <Table striped className="text-white" size="sm">
  <thead  className="text-white" >
    <tr>
      <th>Day</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody >
    <tr  className="text-white" >
      <td>Mon-Wed</td>
      <td>8.00 AM-7.00 PM</td>
    </tr>
    <tr  className="text-white" >
      <td>Thu-Fri</td>
      <td>8.00 AM-5.00 PM</td>
    </tr>
    <tr  className="text-white" >
      <td>Sat-Sun</td>
      <td>Closed</td>
    </tr>
  </tbody>
</Table></Col>
                    <Col sm={7}><h3 className="text-white mt-3" >CONTACT DETAILS</h3><br />
                        <p className="text-white">
                        Madison Avenue 7,NY,US <br/>
                        <FontAwesomeIcon icon={faEnvelope } className="mx-2"/>Email:dentalcaremail@email. <br/>
                        <FontAwesomeIcon icon={faPhone} className="mx-2" />: + 1 800 755 60
                        </p><br />
                        <p className="text-white fs-4">
                        <span ><FaFacebook /></span><span className="mx-3">
                        <FaLinkedinIn />
                        </span>
                        <FaTwitterSquare />
                        <span className="mx-3">
                        <FaTelegram/>
                        </span>
                        </p>
                    </Col>
  </Row>
  
</Container>
        </>
    );
};

export default Contactus;
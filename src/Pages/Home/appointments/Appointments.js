import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';

const Appointments = () => {
    return (
        <>
            
            <Container>
                <h4 className="fw-bold fst-italic text-lg-center text-primary fs-1 my-2 text-uppercase  text-decoration-underline py-5">APPOINTMENTS</h4>
                <Row className="py-3">
                    <Col sm={6}>
                        <img className="img-fluid rounded-3 py-3" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/09/shutterstock_170846444-1200x781.jpg" alt="" />
                    </Col>
                    <Col sm={6}>
                        <p className=" fw-bolder  fs-3 text-lg-center">MAKE AN APPOINTMENT NOW</p>
                        <div className="w-75 mx-auto d-block">
                        <Form>
                        <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="your full name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="your doctor name*" />
                                </Form.Group>
                                <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Additional Messages*" rows={5} />
                                </Form.Group>
                                <Button variant="primary">Book Appointment</Button>
                        </Form>
                    </div>
                    </Col>
  </Row>
  
            </Container>
        </>
    );
};

export default Appointments;

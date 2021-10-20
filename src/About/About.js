import React from 'react';
import { Button, Row, Col, Container, Card,CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook ,FaLinkedinIn,FaTwitterSquare,FaTelegram} from "react-icons/fa";
import dc2 from '../images/doctors/b2.jpg'
import { FcApproval} from "react-icons/fc";


import dc3 from '../images/male2.jpeg'
import dc4 from '../images/b115.jpeg'



const About = () => {
    return (
        <>
            {/* **************************storypart************ */}
            <Container>
            <Row className=" row mt-5 py-4">
                <Col className="col-4  py-2">
                    <h1 className="fw-bolder fst-italic py-2">Our Story</h1>
                    <small className="fs-6">we are working relentlessly for your healthy oral hygiene,  just to keep your sparkling smile as shining as always, even in this pandemic situation.  so without delay book your appointment and leave the rest to usfrom our little precious patient Umar Hamza.
He has completed his treatment with full courage. it was his immense support that helped us to treat his several tooth problems without any hurdle.Is this your tooth? If yes then please visit us before its too late. Tooth enamel erosion can cause irreversible damage to your tooth if not treated on time.</small> <br /> <br />
                    <Button className="m-3 px-3" variant="secondary"><Link className="text-white text-decoration-none fst-italic" to="/contactus">Contact Us</Link></Button>
                    
                </Col>
                <Col className="col-8 mt-3">
                    <div className="">
                        <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/08/shutterstock_181949540-1200x800.jpg" className="img-fluid h-50 w-100 rounded-3" alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
            {/* **********end story****** */}
            
            <Container className="py-3">
            <Row >
                <Col xs={3} className="fs-2 mx-2 rounded-3 px-2 fw-bolder bg-dark text-white text-lg-center">
                        15<br />
                        Doctors 
                </Col>
                <Col xs={5} className="fs-2 mx-2 rounded-3 p-2 fw-bolder bg-dark text-white text-lg-center">
                        4801<br />
                        Satisfied Clients 
                </Col>
                <Col xs={3} className="fs-2 mx-2 fw-bolder bg-dark rounded-3 text-white text-lg-center">
                        20 <br />
                    Awards
                </Col>
                    
            </Row>

            </Container>
            <Container className="py-3 my-2 text-lg-center">
                <h1 className="fw-bolder fs-1 fst-italic text-primary py-2 text-lg-center">Board Of Directors</h1>
                <CardGroup>
  <Card>
    <Card.Img variant="top" src={dc2} />
    <Card.Body id="body">
      <Card.Title>Dental Surgeon</Card.Title>
<Card.Title className="fs-2 fw-bolder text-white">Emma Beckett<FcApproval/></Card.Title>
<Card.Text>
<p>BDS, Dip, OMS ( Australia )
B.D.S, FCPS
Assistant Professor & Head of Department (DC)</p>
</Card.Text>
<Card.Footer>
<h5 className="text-white fs-4">
<span ><FaFacebook /></span><span className="mx-3">
<FaLinkedinIn />
</span>
<FaTwitterSquare/>
</h5>
              </Card.Footer>
    </Card.Body>
   
  </Card>
<Card>
<Card.Img variant="top" src={dc3} />
<Card.Body id="body">
<Card.Title>Dental Surgeon</Card.Title>

<Card.Title className="fs-2 fw-bolder text-white">Mr. Jack Henry<FcApproval/></Card.Title>
<Card.Text>
  <p>BDS, MS ( Norway ), DDS, MCPS, MADRA ( USA ),BDS, FPFA ( USA )</p>
  

              </Card.Text>
              <Card.Footer><h5 className="text-white fs-4 py-4">
<span ><FaFacebook /></span><span className="mx-3">
<FaLinkedinIn />
</span>
<FaTwitterSquare/>
</h5></Card.Footer>
</Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={dc4} />
            <Card.Body id="body">
<Card.Title>Dentist</Card.Title>

<Card.Title className="fs-2 fw-bolder text-white">Hellen Wilson<FcApproval/></Card.Title>

<Card.Text>
<p>BDS, Ph.D. ( Japan )
Associate Professor & Head, Department of Oral & Maxillofacial Surgery
    Dentist</p>
    
</Card.Text>
<Card.Footer>
<h5 className="text-white fs-4">
<span ><FaFacebook /></span><span className="mx-3">
<FaLinkedinIn />
</span>
                                    <FaTwitterSquare />
                                    
                </h5><br />
</Card.Footer>
              
</Card.Body>
</Card>
</CardGroup>
                <Button className="m-3 px-3" variant="primary">Veiw All</Button>

            </Container>

        </>
    );
};

export default About;
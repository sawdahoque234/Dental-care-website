import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FaFacebook ,FaLinkedinIn,FaTwitterSquare,FaTelegram} from "react-icons/fa";
import './Dental.css'
import dc1 from '../../../images/doctors/jenna.png'
import sign from '../../../images/doctors/sign.png'
import dc2 from '../../../images/doctors/b1.jpg'
import dc3 from '../../../images/doctors/b2.jpg'
import dc4 from '../../../images/doctors/b4.jpg'
import dc5 from '../../../images/doctors/b5.jpg'




const DentalTeam = () => {
    return (
<>
<container>
<Row className="mx-5">
<h1 id="hd" className="mb-5 py-5 fst-italic text-lg-center fw-bolder text-decoration-underline text-uppercase">
Our Dental Team! <br/>
</h1>
<Col
    xs={6} className="text-lg-center"><span  className="my-4 py-3 fs-3 text-info fst-italic fw-bolder">Dr Jenna WilSon</span> <br/><small className="text-lg-end">- Best Dental Surgeon </small><br /><small>BDS, FPFA ( USA ), PGT ( Japan )</small>
    <br /><span className="mt-3  mx-3 text-lg-start  py-3 fs-5 text-dark fst-italic">Dr. Jenna Wilson is dedicated to providing her <br /> patients with the most beautiful smile <br />together with the best dental <br />protection available nowadays. She is the <br /> best Surgon in our Clinic.</span><br /><br /><br />
              <span><img src={sign} alt="" /></span>
<h5 className="text-info py-5 fs-4">
<span ><FaFacebook /></span><span className="mx-3">
<FaLinkedinIn />
</span>
<FaTwitterSquare />
<span className="mx-3">
<FaTelegram/>
</span>
</h5>
    
</Col>
<Col xs={6}><img src={dc1} className="d-block w-75 " alt="" /></Col>
</Row>
</container>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src={dc2} />
    <Card.Body id="body" className="text-lg-center">
      <Card.Title>Dental Surgeon</Card.Title>
<Card.Title className="fs-3 fw-bolder text-white">Audrey Button</Card.Title>
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
<Card.Body id="body"className="text-lg-center">
<Card.Title>Dental Surgeon</Card.Title>

<Card.Title className="fs-3 fw-bolder text-white">Emma Beckett</Card.Title>
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
            <Card.Body id="body" className="text-lg-center">
<Card.Title>Dentist</Card.Title>

<Card.Title className="fs-3 fw-bolder text-white">Hellen Hill</Card.Title>

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
<FaTwitterSquare/>
                </h5><br />
</Card.Footer>
              
</Card.Body>
</Card>
<Card>
<Card.Img variant="top" src={dc5} />
        <Card.Body id="body" className="text-lg-center">
  <Card.Title>Dentist</Card.Title>
          
  <Card.Title className="fs-3 fw-bolder text-white">Arianna McDonald</Card.Title>
          <Card.Text>
            <p>BDS, MS ( Norway ), DDS,<br /><br /> MCPS, MADRA ( USA )</p>
       
              </Card.Text>
              <Card.Footer><h5 className="text-white fs-4">
<span ><FaFacebook /></span><span className="mx-3">
<FaLinkedinIn />
</span>
<FaTwitterSquare/>
</h5></Card.Footer>
    </Card.Body>
  </Card>
</CardGroup>
    
    </>
    );
};

export default DentalTeam;
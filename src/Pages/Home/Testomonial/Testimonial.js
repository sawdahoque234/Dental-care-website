import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import {AiFillStar } from "react-icons/ai";
import './Testimonial.css'
import { FcApproval} from "react-icons/fc";

const Testimonial = () => {
    return (
        <>
    <h1 id="hd1"className="fw-bolder text-uppercase py-4 text-decoration-underline text-lg-center">Client Testimonial</h1>
<CardGroup className="py-4">
<Card>
<Card.Img variant="top" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-4.jpg"className="w-50 rounded-circle d-block mx-auto"/>
<Card.Body id="body" className="text-lg-center">
<Card.Title className="fs-3 fw-bolder text-white">PAUL LEE <FcApproval/></Card.Title>
<Card.Text>
<p>    Everyone was very nice. Dr Patel and Linda were both friendly and answered my questions. The lady who took my X-ray was very good. Would come back.</p><br />
<p className="fs-3 text-warning"> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
</Card.Text>
</Card.Body>

</Card>
<Card>
<Card.Img variant="top" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-2.jpg"className="w-50 rounded-circle d-block mx-auto" />
<Card.Body id="body" className="text-lg-center">
<Card.Title className="fs-3 fw-bolder text-white">Anika Hasan<FcApproval/></Card.Title>
<Card.Text>
<p>I would recommend to anyone. The courteous staff of Dr. jenna is very knowledgeable and skillful. Thank you for accepting us as patients of Dr. jenna.</p>
<br/>
<p className="fs-3 text-warning"> <AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
</Card.Text>

</Card.Body>

</Card>
<Card>
<Card.Img variant="top" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-1.jpg" className="w-50 rounded-circle d-block mx-auto"/>
<Card.Body id="body" className="text-lg-center">
<Card.Title className="fs-3 fw-bolder text-white">Refat Hossain<FcApproval/></Card.Title>
<Card.Text>
<p> Both of my sister are patients in your office and we are all very pleased with our treatment. The staff are very kind and welcoming.</p>
<br/>
<p className="fs-3 text-warning"> <AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>                            
</Card.Text>
</Card.Body>
  </Card>
</CardGroup>

        </>
    );
};

export default Testimonial;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/b6.png';
import banner2 from '../../../images/banner/b8.png';

const Banner = () => {
    return (
        <>
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 id="heading1" className=" text-lg-start my-3 py-3 ">We Build  Your<br /> Smile <br />And make <br />easy life.</h1>
                        <p className="text-lg-start fs-5 text-dark">We are Private Dental clinic</p>
                        <p className="text-lg-start"><button className="btn btn-dark">More About us</button></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 id="heading" className="text-lg-start text-pr">Your Beautiful <br />Smile</h1>
                        <br />
                        <p id="caption" className=" fw-bold text-dark text-lg-start fs-5">DentalCare is most focused on <br/>discover your  beautiful Smile.<br />Get your best looking smile now!</p>
                        <br />
                        <p className="text-lg-start"><button className="btn btn-secondary">More About us</button></p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
import React from 'react';
import Appointments from '../appointments/Appointments';
import Banner from '../Banner/Banner';
import DentalTeam from '../DentalTeam/DentalTeam';
import Interested from '../Interested/Interested';
import Services from '../Services/Services';
import Testimonial from '../Testomonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DentalTeam></DentalTeam>
            <Services></Services>
            <Testimonial></Testimonial>
            <Interested></Interested>
            <Appointments></Appointments>
            
        </div>
    );
};

export default Home;
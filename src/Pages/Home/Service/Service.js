import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    // const {service} = props;
    const { id,name, description, img } = service;
    return (
        <div className="service mt-2 text-lg-center">
            <img src={img} alt="" />
            <h3 id="body2">{name}</h3>
            <p className="px-3 py-2">{description}</p>
            <Link to={`/details/${name},
            ${description}`}>
            <button className="btn btn-primary">details {name.toLowerCase()}</button>
            </Link>

            <br /><br />
        </div>
    );
};

export default Service;
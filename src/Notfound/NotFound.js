import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <img src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1" alt="" />
            <Link to="/home"><button className="btn btn-danger">Go Back</button></Link>

        </div>
    );
};

export default NotFound;

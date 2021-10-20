import React,{useEffect,useState} from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Details = () => {
    const { id,servicename ,servicedescription,serviceimg} = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServiceDetail(data));
    }, []);
    useEffect(() => {
        const foundDetails = serviceDetail.find(service => service.id ===+id)
        console.log(foundDetails)
    },[serviceDetail])
    return (
        <div className="py-3 my-5 mx-5">
            <Card>
                <Card.Title>{id}</Card.Title>
                <Card.Text>{servicedescription}</Card.Text>
          </Card>
        </div>
    );
};

export default Details;
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ServiceCard = (props) => {
  const navigate=useNavigate()
  const handelCheck=(serviceId)=>{
       navigate(`/checkOut/${serviceId}`);
  }
  const{name,id,about,image,price}=props.singleService
    return (
        <div className='col-lg-4 col-md-6 mt-2'>
            <Card>
  <Card.Img variant="top" className='img-fluid w-100' src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {about}
    </Card.Text>
    <h6>Service Charge: {price}</h6>
    <Button onClick={()=>handelCheck(about)} variant="primary">Check Out</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default ServiceCard;
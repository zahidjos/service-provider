import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceCard from '../Card/ServiceCard';

const Service = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('serviceData.json')
        .then(res=>res.json())
        .then(services=>setData(services))
    },[])
    
    return (
        <div>
            <Container>
            <h2>My services</h2>
            <div className="row">
            {data.map((singleService)=><ServiceCard  key={singleService.id} singleService={singleService}></ServiceCard>)}
            </div>
           
           </Container>
        </div>
    );
};

export default Service;
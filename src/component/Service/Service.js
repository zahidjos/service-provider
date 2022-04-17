import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceCard from '../Card/ServiceCard';
import CustomHook from '../CustomHook/CustomHook';

const Service = () => {
    // const [data, setData]=useState([]);
    // useEffect(()=>{
    //     fetch('serviceData.json')
    //     .then(res=>res.json())
    //     .then(services=>setData(services))
    // },[])
    const [data]=CustomHook();
    
    return (
        <div>
            <Container>
            <h2 className='text-center'>My services</h2>
            <div className="row">
            {data.map((singleService)=><ServiceCard  key={singleService.id} singleService={singleService}></ServiceCard>)}
            </div>
           
           </Container>
        </div>
    );
};

export default Service;
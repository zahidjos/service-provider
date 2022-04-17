import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomHook from '../CustomHook/CustomHook';
import './CheckOut.css'

const CheckOut = () => {
  const params=useParams();
  console.log(params.serviceId)
  
    return (
        <div className='checkout_part'>
          <h5>{params.serviceId}</h5> 
           
        </div>
    );
};

export default CheckOut;
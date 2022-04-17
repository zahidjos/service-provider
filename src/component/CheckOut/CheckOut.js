import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
  const params=useParams();
    return (
        <div>
          <h1>This is check out{params.serviceId}</h1>  
        </div>
    );
};

export default CheckOut;
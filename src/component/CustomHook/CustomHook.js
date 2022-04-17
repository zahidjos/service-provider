import React, { useEffect, useState } from 'react';

const CustomHook = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('serviceData.json')
        .then(res=>res.json())
        .then(services=>setData(services))
    },[])
    return [data];
};

export default CustomHook;
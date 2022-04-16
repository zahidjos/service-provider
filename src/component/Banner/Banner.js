import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import Baner1 from'../../image/baner (1).jpg';
import Baner2 from'../../image/baner (2).jpg';
import Baner3 from'../../image/baner (3).jpg';



const Banner = () => {
   
    return (
        <div >
             <Carousel className='banner_part'>
  <Carousel.Item className='banner_item'>
    <img
      className="d-block w-100"
      src={Baner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>My service provides </h3>
      <p>The basic electrical repairing services such as fixing the wiring system of fans, switches, fuses, lights, meters etc.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Baner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>My service provides</h3>
      <p>The basic electrical repairing services such as fixing the wiring system of fans, switches, fuses, lights, meters etc.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Baner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>My service provides </h3>
      <p>The basic electrical repairing services such as fixing the wiring system of fans, switches, fuses, lights, meters etc.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>    
        </div>
    );
};

export default Banner;
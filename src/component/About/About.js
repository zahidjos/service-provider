import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import MyPhoto from '../../image/myPhoto.jpg'

const About = () => {
    return (
        <div className='about_part'>
          <Container>
          <div className='image_part'>
          <img className='w-100 img-fluid' src={MyPhoto} alt="" />
          </div>
            
          <h5>Name: Md. Zahid Hasan</h5> 
          <div>
            

            
            <h6>My Goal</h6>
            <p>My goal,i want to fullstock devloper in next 3-4 month . I want to work like a profisonal web developer. My wish , I will learn to make all type of website. you are pray for me ,I can achieve my goal. Thank you</p>
          </div>
          </Container>
        </div>
    );
};

export default About;
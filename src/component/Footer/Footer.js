import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../image/logo.png'
import './Footer.css'
import wire1 from '../../image/wire.jpg'

const Footer = () => {
    return (
        <div className='bg-dark footer_part'>
            <Container>
            <div className='mx-auto' style={{width:"100px"}}><img className='w-100 img-fluid' src={logo} alt="" /></div>
            <div className="row">
                <div className="col-lg-3 col-md-6 ">
                    <h5>Servicing Hours</h5>
                    <ul>
                        <li>Saturday: Close </li>
                        <li> Sunday: 10:00am - 5:00pm</li>
                        <li>Monday: 10:00am - 5:00pm</li>
                        <li> Tuesday: 10:00am - 5:00pm</li>
                        <li>Wednesday: 10:00am - 5:00pm</li>
                        <li>Thursday: 10:00am - 5:00pm</li>
                        <li>Friday: Close</li>
                    </ul>
                
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4>Twetter feed</h4>
                    <ul>
                        <li><FontAwesomeIcon icon={faCoffee} /> I want to introduce you to a new ess theme Service provider new press theme. This the new idea for theme, hope you will like. 24 July 2017</li>
                        <li><FontAwesomeIcon icon={faCoffee} /> I want to introduce you to a new ess theme Service provider new press theme. This the new idea for theme, hope you will like. 24 July 2018</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5>FLICKR PHOTOS</h5>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img className='w-100 img-fluid' src={wire1} alt="" />
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-3 col-md-6">
                        <h5>CONTACT</h5>
                        <ul>
                            <li>Location: 1234 Park Street Avenue, NY City America.</li>
                            <li>Number: +88 017 386 96914, +88 017 419 69683</li>
                            <li>Gmail: info@admin.com, admin@info.com</li>
                        </ul>
                    </div>
            </div>
            </Container>
        </div>
    );
};

export default Footer;
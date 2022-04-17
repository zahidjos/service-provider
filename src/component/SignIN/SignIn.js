

import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Service.fig';
import Spiner from '../Spiner/Spiner';
import './SignIn.css';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [user] = useAuthState(auth);
      const navigate=useNavigate();
      const location=useLocation();
      const emailRef=useRef('');

      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );


      
      const handelSignIn=(event)=>{
        event.preventDefault();
          let email=event.target.email.value;
          let password=event.target.password.value;
        
        signInWithEmailAndPassword(email,password);
        

      }
      const handelPassword=async()=>{
       let passwordEmail=emailRef.current.value;
       await sendPasswordResetEmail(passwordEmail);
      }
      if(sending){
          return (
          <div className='w-50 mx-auto'>
           <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
         </Toast.Header>
          <Toast.Body>Sending message Email</Toast.Body>
         </Toast>
          </div>
          )
          
      }

      if(user){
        let from = location.state?.from?.pathname || "/";
        navigate(from,{replace:true});
      }
      if(loading){
          return <Spiner></Spiner>
      }
      
    return (
        <div className='sign_part'>
            <h1 className='text-center'>Log In</h1>
            <Form onSubmit={handelSignIn}>
    
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

 

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" />
  </Form.Group>
  <h4 className='text-danger'>{error?.message||resetError?.message|| ""}</h4>
 
  <p>Have you no account : <Link to={'/signUp'}>Please Registration</Link></p>
  
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
<p>Forget Password: <button onClick={handelPassword} >Password reset now </button></p>
        </div>
    );
};

export default SignIn;
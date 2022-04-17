

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Service.fig';
import './SignIn.css';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [user] = useAuthState(auth);
      const navigate=useNavigate()
      
      const handelSignIn=(event)=>{
        event.preventDefault();
          let email=event.target.email.value;
          let password=event.target.password.value;
        
        signInWithEmailAndPassword(email,password);
        navigate('/')

      }
      console.log(user);
      if(loading){
          return <p>loading...</p>
      }
      
    return (
        <div className='sign_part'>
            <h1 className='text-center'>Log In</h1>
            <Form onSubmit={handelSignIn}>
    
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

 

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" />
  </Form.Group>
  <p className='text-danger'>{error?error.message: ""}</p>
 
  <p>Have you no account : <Link to={'/signUp'}>Please Registration</Link></p>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>
        </div>
    );
};

export default SignIn;
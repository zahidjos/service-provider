import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../Service.fig';
import './SignUp.css'
import { useAuthState, useCreateUserWithEmailAndPassword,useUpdateProfile  } from 'react-firebase-hooks/auth';



const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error2] = useUpdateProfile(auth);
      const [user, loading, error] = useAuthState(auth);

    const handelSignUp=async(event)=>{
        event.preventDefault();
       let name= event.target.name.value;
       let email=event.target.email.value;
       let password=event.target.password.value;
       
       createUserWithEmailAndPassword(email,password);
      await updateProfile(name);
      console.log(user);


    }
    return (
        <div className='signup_part'>
            <h1 className='text-center'> Sign up</h1>
            <Form onSubmit={handelSignUp}>
    <Form.Group className="mb-3" >
    <Form.Label>Enter your Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter your name" />
    <Form.Text className="text-muted">
      you give full name
    </Form.Text>
  </Form.Group>
  
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <p>Already you have an account : <Link to={'/logIn'}>Please Log In</Link></p>
  <Button variant="primary" type="submit">
    Registration
  </Button>
</Form>
        </div>
    );
};

export default SignUp;
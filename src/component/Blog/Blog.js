import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog_part'>
            <Container>
            <div>
                <h3>Question:Difference between Authentication and Authorization.</h3>
                <p>Answer: Authentication: Authentication confirms your identity to grant access to the system. It is the process of validating user credentials to gain user access. It determines whether user is what he claims to be. Authentication usually requires a username and a password. Authentication is the first step of authorization so always comes first. For example, students of a particular university are required to authenticate themselves before accessing the student link of the university’s official website. This is called authentication. <br />
                Authorization: Authorization determines whether you are authorized to access the resources. It is the process of verifying whether access is allowed or not. It determines what user can and cannot access. Authentication factors required for authorization may vary, depending on the security level. Authorization is done after successful authentication. For example, authorization determines exactly what information the students are authorized to access on the university website after successful authentication.</p>
            </div>
            <div>
                <h3>Question: why are you using firebase?  what other options do you have to implement authentication?</h3>
                <p>Answer: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. <br />
There are a lot of different methods to authenticate people and validate their identities. Different systems need different credentials for confirmation. Depending on each use case, this credential can either be a password, biometrics, a digital token, digital certificate, etc.
</p>
            </div>
            <div>
                <h3>Question: What other services does firebase provide other than authentication?</h3>
                <p>Answer: Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            </Container>
        </div>
    );
};

export default Blog;
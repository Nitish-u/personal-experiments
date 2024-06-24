// About.js

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const UserCard = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const About = () => {
  const [,setParams] = useSearchParams();
  // Dummy user data (replace this with your actual data)
  const users = [
    { name: 'John Doe', age: 25, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Doe', age: 30, bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more users as needed
  ];

  return (
    <>
    <AboutContainer>
      <h2>About Us</h2>
      {users.map((user, index) => (
        <UserCard key={index}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Bio: {user.bio}</p>
        </UserCard>
      ))}
    </AboutContainer>
    </>
  );
};

export default About;

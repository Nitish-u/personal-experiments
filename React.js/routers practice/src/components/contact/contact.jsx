// Contacts.js

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ContactsContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
`;

const Contacts = () => {
  const {name="some one"} = useParams();
  // Dummy contact data (replace this with your actual data)
  const contacts = [
    { platform: "Twitter", id: "@example_twitter", type: "social" },
    { platform: "LinkedIn", id: "example.linkedin", type: "social" },
    { platform: "Phone", id: "+1234567890", type: "phone" },
    { platform: "Email", id: "info@example.com", type: "email" },
    // Add more contacts as needed
  ];

  return (
    <>
      <h1 style={{textAlign:"center"}}>Contact {name}</h1>
      <ContactsContainer>
        <h2>Contact Information</h2>
        {contacts.map((contact, index) => (
          <ContactItem key={index}>
            <strong>{contact.platform}:</strong> {contact.id}
          </ContactItem>
        ))}
      </ContactsContainer>
    </>
  );
};

export default Contacts;

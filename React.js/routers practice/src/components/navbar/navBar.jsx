// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import "../../App.css"

const NavBarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100vw;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <Logo>React Routers</Logo>
      <NavLinks>
        <NavLink className='links' to="/home" style={({isActive})=> { return {color:isActive?"red": ""}}}>Home</NavLink>
        <NavLink className='links' to="/about" style={(obj)=> { 
          // console.log(obj);
          return {color:obj.isActive?"red": ""}}}>About</NavLink>
        <NavLink className='links' to="/contact" style={({isActive})=> { return {color:isActive?"red": ""}}}>Contact</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
};

export default Navbar;

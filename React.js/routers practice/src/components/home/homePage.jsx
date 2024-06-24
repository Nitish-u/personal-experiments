// Home.js

import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import Comp1 from "./child components for home page/comp1";
import Comp2 from "./child components for home page/comp2";
import Comp3 from "./child components for home page/comp3";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const WelcomeMessage = styled.h2`
  margin-bottom: 20px;
`;
const personNames = ["John Doe", "Jane Doe", "Alex Smith", "Emily Johnson"];

const btn = {
  TextDecoder: "none",
  color: "black",
  widht: "10rem",
  padding: "0.5rem",
  margin: "0.5rem",
};

const HomePage = () => {
  const [input, setInput] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  return (
    <>
      <HomeContainer>
        <WelcomeMessage>Welcome to Our Website!</WelcomeMessage>
        <p>
          This is the home page of our application. You can customize this
          component to include any content, features, or sections you want to
          showcase on your landing page.
        </p>
        <div>
          {personNames.map((name) => {
            const url = `/contact/${name}`;
            return (
            <Link to={url}>
              <button style={btn}>{name}</button>
            </Link>
            );
          })}
        </div>
        {/* Add more content or features as needed */}
        <input type="text" placeholder="Enter a name...." value={input} onChange={(e) => setInput(e.target.value)} style={btn}/>
        <button onClick={() => {
          setSearchParams({identity:input});
          setInput("");
          }} style={btn}>Set this name as param</button>
        <div>The name you provided : {searchParams.get("identity")}</div> 
        <button onClick={() => navigate("/about")} style={btn}>About page</button>
        {/* in home page  */}
        <Link to="comp1" state={{name:"nitish",rollno:2230061, branch:"CSE"}} onClick={() => {setSearchParams({adding:454});setSearchParams("#56454")}}>comp1</Link>
        <Link to="comp2">comp2</Link>
        <Link to="comp3">comp3</Link>
        <Outlet/>
      </HomeContainer>
    </>
  );
};

export default HomePage;

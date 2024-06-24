// import DetailsCard from "./detailsCard";
// import { useState } from "react";
import "../../components-css/inputfields.css";
import React from "react";
import { render } from "@testing-library/react";

function DetailsCard(prop) {
  console.log(prop[5]);
  if(prop[0]){
    render(
      <span className="card">
        <img src={prop[5]} alt={prop[0]} width="100px" />
        <p>
          <strong>Name :- </strong>
          {prop[0]}
        </p>
        <p>
          <strong>Class :- </strong>
          {prop[1]}
        </p>
        <p>
          <strong>Section :- </strong>
          {prop[2]}
        </p>
        <p>
          <strong>Roll no. :- </strong>
          {prop[3]}
        </p>
        <p>
          <strong>D.O.B :- </strong>
          {prop[4]}
        </p>
      </span>
    );
  }
}
export default function InputFields() {
  function formHndl(e) {
    e.preventDefault();
    let forSrc = e.target[5].value.split("\\");
    console.log("submited");
    const secondDetails = [
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value,
      "./images/" + forSrc[forSrc.length - 1],
    ];
    DetailsCard(secondDetails);
  }
  return (
    <>
      <form className="input-container" onSubmit={formHndl} autoComplete="on">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="class" placeholder="Class" />
        <input type="text" name="rollno" placeholder="Roll No." />
        <input type="text" name="section" placeholder="Section" />
        <input type="date" name="dob" placeholder="Date" />
        <input type="file" name="pic" id="" />
        <button type="submit">Submit</button>
      </form>
      {/* {secondDetails && <DetailsCard condition={secondDetails} />} */}
    </>
  );
}

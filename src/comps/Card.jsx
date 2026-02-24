import React from "react";

export default function Card({ iconLink, cardName, value }) {
  return (
    <>
      <div>
        <img src={iconLink} alt=""></img>
        <p>{cardName}</p>
      </div>
      <p>{value}</p>
    </>
  );
}

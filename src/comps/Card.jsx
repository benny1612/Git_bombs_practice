import React from "react";

export default function Card({ iconLink, cardName, value }) {
  return (
    <div className=" bg-[#171f32] pr-2 pl-2 justify-around flex flex-col border rounded border-gray-300">
      <div className="flex flex-row border-b border-gray-300">
        <img src={iconLink} alt=""></img>
        <p className="text-center text-white">{cardName}</p>
      </div>
      <p className="text-center text-white">{value}</p>
    </div>
  );
}

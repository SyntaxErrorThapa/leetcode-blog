import React from "react";

function Card({ number, description, onClick, color }) {
  return (
    <div onClick={onClick} className={`h-32 w-72 ${color} shadow-md rounded-lg flex flex-col justify-center items-center m-4`}>
      {/* Problem number */}
      <span className="text-2xl font-extrabold text-white text-center">
        {number}
      </span>
      <span className="text-md font-semibold text-white px-4 text-center">
        {description}
      </span>
    </div>
  );
}

export default Card;

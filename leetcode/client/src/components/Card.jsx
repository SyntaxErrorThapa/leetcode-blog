import React from "react";

// Logged In card height = 32, width = 72
function Card({ number, description, onClick, color, height, width }) {
  return (
    <div onClick={onClick} className={`h-${height} w-${width} ${color} shadow-md rounded-lg flex flex-col justify-center items-center m-4`}>
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

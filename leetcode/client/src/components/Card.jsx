import React from "react";

function Card({ number, description, onClick }) {
  return (
    <div onClick={onClick} className="h-32 w-72 bg-white shadow-md rounded-lg flex flex-col justify-center items-center m-4">
      {/* Problem number */}
      <span className="text-2xl font-bold text-gray-700 text-center">
        {number}
      </span>
      <span className="text-md text-gray-500 px-4 text-center">
        {description}
      </span>
    </div>
  );
}

export default Card;

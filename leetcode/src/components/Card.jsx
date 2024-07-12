import React from "react";

function Card(props){
    return <>
    <div className="h-20 w-72 bg-white shadow-md rounded-lg flex flex-col justify center items-center m-4">
        {/* Problem number */}
        <span className="text-xl font-bold text-gray-700">
            {props.number}
        </span>
        <span className="text-md text-gray-500">
            {props.description}
        </span>
    </div>
    </>
}

export default Card;
import React from "react";

function ModalExplanation({ explanation }) {
  return (
    <>
      <div className="flex flex-col m-1 p-3 border-2 rounded-lg">
        <p className="font-bold">
          Question Description: 
        </p>
        <p className="whitespace-pre-wrap">{explanation}</p>
        </div>
    </>
  );
}
export default ModalExplanation;

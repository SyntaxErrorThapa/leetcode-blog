import React from "react";

function ModalAnswer({ answer }) {
  return (
    <>
      <div className="flex flex-row mt-4 p-4 rounded-lg shadow-sm border-2">
        <p className="whitespace-pre-wrap">
          <p className="font-bold text-xl">Approach: </p> 
          <br></br>
          <p>{answer}</p>
        </p>
      </div>
    </>
  );
}

export default ModalAnswer;

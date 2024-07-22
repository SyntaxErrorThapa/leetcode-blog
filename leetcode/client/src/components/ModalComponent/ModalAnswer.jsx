import React from "react";

function ModalAnswer({ answer }) {
  return (
    <>
      <div className="flex flex-row mt-4 p-4 rounded-lg shadow-sm border-2">
        <p className="whitespace-pre-wrap"><span className="font-bold">Approach:</span> {answer}</p>
      </div>
    </>
  );
}

export default ModalAnswer;

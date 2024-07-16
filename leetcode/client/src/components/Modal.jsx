import React from "react";

function Modal({ content, closeModal }) {
  return (
    <>
    {}
      {/* Parent Div */}
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        {/* Modal Div */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
          {/* Header Div */}
          <div className="flex justify-between items-center">
            {" "}
            {/* justify between adds space between the flex element */}
            <h2 className="text-2xl font-bold">
              Question
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </h2>
          </div>
          {/* Content Div */}
          <div className="mt-4 text-gray-500">
            <p>
              <strong>Question No:</strong> {content}
            </p>
            <p>
              <strong>Description:</strong> {content.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

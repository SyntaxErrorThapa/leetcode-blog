import React from "react";
import { Typography } from "@mui/material";

function ModalHeader({ heading, number }) {
  return (
    <>
      <div className="flex flex-row font-bold">
        <div className="m-2 text-2xl">
          <span>{number}</span>
        </div>
        <div className="m-2 text-2xl">{heading}</div>
      </div>
    </>
  );
}

export default ModalHeader;

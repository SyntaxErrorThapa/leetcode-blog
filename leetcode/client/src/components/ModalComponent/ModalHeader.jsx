import React from "react";
import { Typography } from "@mui/material";

function ModalHeader({heading}) {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h1">
        {heading}
      </Typography>
    </>
  );
}

export default ModalHeader;

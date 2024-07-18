import React from "react";
import { Typography } from "@mui/material";

function ModalExplanation( {explanation} ) {
  return (
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {explanation}
    </Typography>
  );
}
export default ModalExplanation;

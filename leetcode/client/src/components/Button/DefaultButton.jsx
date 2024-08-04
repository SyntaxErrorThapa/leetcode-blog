import React from "react";
import Button from "@mui/material/Button";
import { merge } from "lodash";

function DefaultButton(props) {
  const defaultSx = {
    color: "white",
    borderColor: "white",
    "&:hover": {
      color: "white",
      borderColor: "rgb(255, 255, 255, 0.1)",
    },
  };

  // Used to merge the sx
  const mergedSx = merge({}, defaultSx, props.sx);

  return (
    <Button
      variant="outlined"
      sx={mergedSx}
      onClick={props.handleOpen}
    >
      {props.text}
    </Button>
  );
}

export default DefaultButton;

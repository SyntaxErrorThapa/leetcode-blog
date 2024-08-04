import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import { makeStyles } from "@mui/material";

const actions = [
  {
    icon: <FileCopyIcon />,
    name: "Copy",
  },
];

function SpeedDialButton({ openModal }) {
  
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        {" "}
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => openModal("hello", "bor", true)}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
export default SpeedDialButton;

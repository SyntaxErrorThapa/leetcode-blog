import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalExplanation from "./ModalExplanation";
import ModalCoding from "./ModalCoding";
import ModalHeader from "./ModalHeader";
import ModalAddQuestion from "./ModalAddQuestion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Relative width
  maxWidth: "800px", // Maximum width
  height: "auto", // Dynamic height based on content
  maxHeight: "90vh", // Maximum height to ensure it doesn't exceed viewport height
  bgcolor: "#1e1e1e", // Dark background color
  color: "#fff", // White text color
  border: "1px solid #333", // Border to match dark theme
  boxShadow: 24,
  p: 4,
  borderRadius: "20px", // Rounded corners
  fontFamily: "Fira Code, monospace", // Font family
  overflowY: "auto", // Scroll content if overflow
};

function CustomModal({ explanation, coding, open, handleClose, isAdd }) {
  console.log(isAdd)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="no-scrollbar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Modal Heading */}
          <ModalHeader heading="Explanation" />
          <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Modal Question */}
        {!isAdd ? (
          <>
            {/* Modal Explanation section */}
            <ModalExplanation explanation={explanation}/>
            
            {/* Modal Coding section */}
            <ModalCoding coding={coding} />
          </>
        ) : (
          <>
          {/* Modal Add Questions */}
          <ModalAddQuestion  onClose={handleClose}/>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default CustomModal;

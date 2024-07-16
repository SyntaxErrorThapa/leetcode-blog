import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

function CustomModal({ explanation, coding, open, handleClose }) {
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
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Explanation
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {explanation}
        </Typography>
        <Typography id="modal-modal-coding" sx={{ mt: 2 }}>
          <SyntaxHighlighter language="python" style={docco}>
            {coding}
          </SyntaxHighlighter>
        </Typography>
      </Box>
    </Modal>
  );
}

export default CustomModal;

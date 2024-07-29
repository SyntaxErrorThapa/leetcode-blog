import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalExplanation from "./ModalExplanation";
import ModalCoding from "./ModalCoding";
import ModalHeader from "./ModalHeader";
import ModalAddQuestion from "./ModalAddQuestion";
import ModalAnswer from "./ModalAnswer";
import ModalQuestionLink from "./ModalQuestionLink";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Relative width
  maxWidth: "1200px", // Maximum width
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

function CustomModal({
  modalContent,
  open,
  handleClose,
  isAdd,
  fetchQuestions,
}) {
  console.log(isAdd);
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
          {!isAdd ? <ModalHeader number={modalContent.questionNo} heading={modalContent.subdescription} /> : <ModalHeader heading="New Question Form" />}
          <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Modal Question */}
        {!isAdd ? (
          <>
            {/* Modal Question Description section */}
            <ModalExplanation explanation={modalContent.description} />
            
            {/* Modal Explanation */}
            <ModalAnswer answer={modalContent.explanation} />

            {/* Modal Coding section */}
            <ModalCoding coding={modalContent.coding} />

            {/* Modal Question Link */}
            <ModalQuestionLink questionLink={modalContent.code_link} />
          </>
        ) : (
          <>
            {/* Modal Add Questions */}
            <ModalAddQuestion
              onClose={handleClose}
              fetchQuestions={fetchQuestions}
            />
          </>
        )}
      </Box>
    </Modal>
  );
}

export default CustomModal;

import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalExplanation from "./ModalExplanation";
import ModalCoding from "./ModalCoding";
import ModalHeader from "./ModalHeader";
import ModalAddQuestion from "./ModalAddQuestion";
import ModalAnswer from "./ModalAnswer";
import ModalQuestionLink from "./ModalQuestionLink";
import ModalPDF from "./ModalPDF";
import DefaultButton from "../Button/DefaultButton.jsx";
import axios from "axios";
import Swal from "sweetalert2";

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

const apiUrl = "https://server.leetcodejournal.com";

function CustomModal({
  modalContent,
  open,
  handleClose,
  isAdd,
  fetchQuestions,
  isLogged,
}) {
  const handleCloseButton = async () => {
    handleClose();
    try {
      const response = await axios({
        method: "delete",
        url: `${apiUrl}/question/delete/${modalContent.questionNo}`,
        withCredentials: true,
      });
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      alert("Error at delete", error);
    }
    fetchQuestions();
  };

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
          {!isAdd ? (
            <ModalHeader
              number={modalContent.questionNo}
              heading={modalContent.subdescription}
            />
          ) : (
            <ModalHeader heading="Question Form" />
          )}
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

            {/* Modal Pdf Section */}
            <ModalPDF pdf={modalContent.picture} />

            {/* Modal Coding section */}
            <ModalCoding coding={modalContent.coding} />

            <div className="flex flex-row text-center items-center justify-between">
              {/* Modal Question Link */}
              <ModalQuestionLink questionLink={modalContent.code_link} />

              {/* Logged User allowed to edit */}
              {isLogged ? (
                <DefaultButton
                  text="Delete"
                  sx={{ width: "100px", height: "50px" }}
                  handleOpen={handleCloseButton}
                />
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Modal Add Questions */}
            <ModalAddQuestion
              onClose={handleClose}
              fetchQuestions={fetchQuestions}
              isLogged={isLogged}
              questionId={modalContent.questionNo}
            />
          </>
        )}
      </Box>
    </Modal>
  );
}

export default CustomModal;

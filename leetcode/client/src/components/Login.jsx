import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0, 0, 0, 0.8)", // Make the background color darker
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  height: 150,
};

function ModalLogin() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onGoogleLogin = async () => {
    try {
        console.log("Clicked");
      const response = await axios.post(
        "/auth-google",
        {
          data: { someKey: "someValue" },
        },
        {
          headers: {
            "Content-Type": "application/json", // Adjust if needed
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            color: "white",
            borderColor: "rgb(255, 255, 255, 0.1)",
          },
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            onClick={onGoogleLogin}
            className="flex flex-row m-4 bg-gray-800 p-8 rounded-md"
          >
            <img
              className="mr-4"
              loading="lazy"
              height="24"
              width="24"
              id="provider-logo-dark"
              src="https://authjs.dev/img/providers/google.svg"
            ></img>
            <p className="text-white font-bold">Sign in with Google</p>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ModalLogin;

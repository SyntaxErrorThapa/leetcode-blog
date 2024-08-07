import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DefaultButton from "./Button/DefaultButton.jsx";

const webURL = "http://localhost:7000";

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

function ModalLogin({ isLogged, setIsLogged }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (isLogged) {
      setIsLogged({ logStatus: false, user: null });
      try {
        const response = fetch(`/auth/logout`, {
          method: "POST",
          credentials: "include", // Include cookies
        });
        // window.location.href = "/";
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const onGoogleLogin = () => {
    window.location.href = `${webURL}/auth/google`;
    // const response = fetch("/auth/google", {
    //   method: "POST",
    // });
  };

  return (
    <>
      {isLogged ? (
        <DefaultButton handleOpen={handleOpen} text="Logout" />
      ) : (
        <DefaultButton handleOpen={handleOpen} text="Login" />
      )}

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

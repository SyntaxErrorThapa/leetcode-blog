import React from "react";
import { Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function ModalCoding({ coding }) {
  return (
    <>
      <Typography id="modal-modal-coding" sx={{ mt: 2 }}>
        <SyntaxHighlighter language="python" style={docco}>
          {coding}
        </SyntaxHighlighter>
      </Typography>
    </>
  );
}
export default ModalCoding;

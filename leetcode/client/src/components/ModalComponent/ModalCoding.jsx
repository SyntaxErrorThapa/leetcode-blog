import React from "react";
import { Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const customStyle = {
  borderRadius: '20px',
}
function ModalCoding({ coding }) {
  return (
    <>
      <div className="mt-5">
        <SyntaxHighlighter language="python" style={docco} customStyle={customStyle}>
          {coding}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
export default ModalCoding;

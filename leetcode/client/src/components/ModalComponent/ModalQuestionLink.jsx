import React from "react";

const styles = {
  container: {
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px 0",
  },
  link: {
    color: "#3f51b5",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

function ModalQuestionLink({ questionLink }) {
  return (
    <div style={styles.container}>
      <a
        href={questionLink}
        style={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link: {questionLink}
      </a>
    </div>
  );
}

export default ModalQuestionLink;

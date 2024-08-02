import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure the workerSrc to point to the local copy of the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ModalPDF({ pdf }) {
  const pdfUrl = `http://localhost:5000/${pdf}`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  if (!pdf) return null;

  return (
    
    <div className="pdf-container no-scrollbar" style={containerStyle}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={1200} height={1000}/>
      </Document>
      <div className="navigation" style={navigationStyle}>
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          style={buttonStyle}
        >
          Previous
        </button>
        <span style={pageInfoStyle}>
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          style={buttonStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  height: '65vh', // Fixed height
  overflowY: 'auto', // Enable vertical scrolling
  backgroundColor: '#1e1e1e', // Dark background color
  color: '#fff', // White text color
  padding: '16px', // Padding around the content
  borderRadius: '8px', // Rounded corners
  border: '1px solid #333', // Border to match dark theme
  display: 'flex', // Flex display
  flexDirection: 'column', // Column direction for navigation
  alignItems: 'center', // Center align items
};

const navigationStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

const buttonStyle = {
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const pageInfoStyle = {
  color: '#fff',
};

export default ModalPDF;

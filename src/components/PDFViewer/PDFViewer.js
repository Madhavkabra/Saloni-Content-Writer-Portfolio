import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer = ({ pdfLink }) => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1.2);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1440) setWindowWidth(1.12);
    else if (width <= 1440 && width > 1024) setWindowWidth(1.15);
    else if (width <= 1024 && width > 768) setWindowWidth(1.2);
    else if (width <= 768 && width > 425) setWindowWidth(1.1);
    else if (width <= 425 && width > 375) setWindowWidth(0.6);
    else setWindowWidth(0.55);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from({ length: numPages }, (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          scale={windowWidth}
        />
      ))}
    </Document>
  );
};

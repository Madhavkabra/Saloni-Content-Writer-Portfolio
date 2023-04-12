import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { windowHandler } from 'utils/windowWidth';
import styles from './PDFViewer.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer = ({ resume, pdfLink, solution }) => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1.12);

  useEffect(() => {
    const width = window.innerWidth;
    const pdfWidth = resume && width>1440 ? 1.5 : windowHandler(width);
    setWindowWidth(pdfWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <>
      {solution && <div>Solution</div>}

      <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) => (
          <div className={styles.pageContainer}>
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              scale={windowWidth}
            />
          </div>
        ))}
      </Document>
    </>
  );
};

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import abc from "pdfjs-dist/build/pdf.worker.js";
import styles from './PdfLoader.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfLoader = ({ link }) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        console.log("NUM", nextNumPages);
        setNumPages(nextNumPages);
    }
    return (
        // className={styles.documentContainer}
        <Document file={link} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({ length: numPages }, (_, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            ))}
        </Document>
    )
}

// export default PdfLoader;
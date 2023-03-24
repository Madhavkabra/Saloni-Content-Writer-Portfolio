import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import abc from "pdfjs-dist/build/pdf.worker.js";
import styles from './Resume.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({ link }) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    // 'https://raw.githubusercontent.com/Madhavkabra/Saloni-Content-Writer-Portfolio/main/src/assets/98347-%20Question%20file.pdf'
    return (
        <Document className={styles.documentContainer} file={link} onLoadSuccess={onDocumentLoadSuccess}>
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

export default Resume;
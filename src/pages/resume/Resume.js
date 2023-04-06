import { PDFViewer } from 'components/PDFViewer';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <Post
        title="Resume"
        href="https://raw.githubusercontent.com/Madhavkabra/Saloni-Content-Writer-Portfolio/fixes/article-pdf-services/src/assets/Dr.%20Saloni%20Kabra.pdf"
      >
        <PDFViewer resume={true} pdfLink="https://raw.githubusercontent.com/Madhavkabra/Saloni-Content-Writer-Portfolio/fixes/article-pdf-services/src/assets/Dr.%20Saloni%20Kabra.pdf" />
      </Post>
    </div>
  );
};

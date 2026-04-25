import dynamic from 'next/dynamic';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

const PDFViewer = dynamic(() => import('components/PDFViewer').then(mod => mod.PDFViewer), {
  ssr: false,
});

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

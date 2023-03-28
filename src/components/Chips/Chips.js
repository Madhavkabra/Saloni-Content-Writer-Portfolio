import { classes } from 'utils/style';
import { useRouter } from 'next/router';
import styles from './Chips.module.css';

export const Chips = ({ title, onClick, selected, selectedCategories }) => {
  const router = useRouter();

  const clickHandleCategory = ({ title, selectedCategories }) => {
    onClick({ title });
    selectedCategories.push(title);
    router.push(`/articles?filter`, { query: selectedCategories });
  };
  return (
    <div
      onClick={() => clickHandleCategory({ title, selectedCategories })}
      className={
        selected ? classes(styles.chipsSelected, styles.chips) : classes(styles.chips)
      }
    >
      {title}
    </div>
  );
};

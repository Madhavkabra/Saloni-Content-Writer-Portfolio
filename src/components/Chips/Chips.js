import { useEffect } from 'react';
import { classes } from 'utils/style';
import { useRouter } from 'next/router';
import styles from './Chips.module.css';

export const Chips = ({ title, selected, selectedCategories, setSelectedCategories }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/articles?filter`, { query: selectedCategories });
  }, [selectedCategories]);

  const clickHandleCategory = ({ title, selectedCategories }) => {
    if (title === 'Reset All') {
      setSelectedCategories([]);
    } else if (selectedCategories.includes(title)) {
      selectedCategories.splice(selectedCategories.indexOf(title), 1);
      setSelectedCategories([...selectedCategories]);
    } else {
      setSelectedCategories([...selectedCategories, title]);
    }
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

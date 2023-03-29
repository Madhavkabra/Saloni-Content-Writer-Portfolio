import { useEffect } from 'react';
import { classes } from 'utils/style';
import { useRouter } from 'next/router';
import styles from './Chips.module.css';

export const Chips = ({ title, selected, selectedCategories, setSelectedCategories }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/articles?filter`, { query: selectedCategories });
  }, [selectedCategories]);

  const handleClickOnCategory = () => {
    if (title === 'Reset All') {
      setSelectedCategories([]);
    } else if (selectedCategories?.includes(title)) {
      const categories = [...selectedCategories];
      categories.splice(categories.indexOf(title), 1);
      setSelectedCategories(categories);
    } else {
      setSelectedCategories([...selectedCategories, title]);
    }
  };
  return (
    <div
      onClick={handleClickOnCategory}
      className={
        selected ? classes(styles.chipsSelected, styles.chips) : classes(styles.chips)
      }
    >
      {title}
    </div>
  );
};

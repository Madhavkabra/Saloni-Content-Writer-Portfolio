import { useEffect } from 'react';
import { classes } from 'utils/style';
import { useRouter } from 'next/router';
import styles from './Chips.module.css';

export const Chips = ({ title, selected, selectedCategories, setSelectedCategories }) => {
  const router = useRouter();
  const chipsCategories = [...selectedCategories];

  useEffect(() => {
    router.push(`/articles?filter`, { query: selectedCategories });
  }, [selectedCategories]);

  const clickHandleCategory = ({ title, chipsCategories }) => {
    if (title === 'Reset All') {
      setSelectedCategories([]);
    } else if (chipsCategories?.includes(title)) {
      chipsCategories.splice(chipsCategories.indexOf(title), 1);
      setSelectedCategories([...chipsCategories]);
    } else {
      setSelectedCategories([...chipsCategories, title]);
    }
  };
  return (
    <div
      onClick={() => clickHandleCategory({ title, chipsCategories })}
      className={
        selected ? classes(styles.chipsSelected, styles.chips) : classes(styles.chips)
      }
    >
      {title}
    </div>
  );
};

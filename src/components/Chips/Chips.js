import { classes } from 'utils/style';
import styles from './Chips.module.css';

export const Chips = ({ title, onClick, selected }) => {
  return (
    <div
      onClick={() => onClick({ title })}
      className={
        selected ? classes(styles.chipsSelected, styles.chips) : classes(styles.chips)
      }
    >
      {title}
    </div>
  );
};

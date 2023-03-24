import { useState } from 'react';
import { classes } from 'utils/style';

import styles from './Chips.module.css';

export const Chips = ({ text, onClick, select }) => {
    // const [clickHandler, setClickHandler] = useState(false);
    // console.log("CHIPS", text, select);
    const onClickHandler = () => {
        console.log("click");
        // val.push(text)
        // console.log("VAL", [...val, text]);
        // console.log("INCLUDE", [...val, text].includes(text));
        // if (text !== 'Reset All') {
        // setClickHandler(!clickHandler);
        onClick({ text });
        // } else if (text === 'Reset All') {
        //     onClick({ text });
        // }
    };

    return (
        <div
            onClick={onClickHandler}
            className={
                select
                    ? classes(styles.chipsSelected, styles.chips)
                    :
                    classes(styles.chipsUnSelected, styles.chips)
            }
        >
            {text}
        </div>
    );
};

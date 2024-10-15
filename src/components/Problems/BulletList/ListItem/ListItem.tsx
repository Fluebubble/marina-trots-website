import React from 'react';
import styles from './ListItem.module.scss';

interface Props {
  text: string;
  image: string;
}

export const ListItem: React.FC<Props> = ({ text, image }) => {
  return (
    <li className={styles.item}>
      <svg className={styles.image}>
        <use href={image}></use>
      </svg>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

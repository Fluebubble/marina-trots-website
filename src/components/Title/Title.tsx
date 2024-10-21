import React from 'react';
import styles from './Title.module.scss';

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
};

import React from 'react';
import styles from './MainTitle.module.scss';

export const MainTitle = () => {
  return (
    <h1 className={styles['hero__title-text']}>
      <span className={styles['hero__title-first-part']}>Марина Троц</span>
      <span className={styles['hero__title-second-part']}>Психолог, КПТ-терапевт</span>
    </h1>
  );
};

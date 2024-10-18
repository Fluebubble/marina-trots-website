import React from 'react';
import styles from './PhoneCTA.module.scss';

export const PhoneCTA = () => {
  return (
    <a
      href="tel:+380631095844"
      className={styles['phone']}
    >
      <span className={styles['phone__cta']}>Остались вопросы? Звоните!</span>
      <span className={styles['phone__number']}>+38 063 109 58 44</span>
    </a>
  );
};

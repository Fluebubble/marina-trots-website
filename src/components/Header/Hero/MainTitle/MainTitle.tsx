import styles from './MainTitle.module.scss';

export const MainTitle = () => {
  return (
    <h1 className={styles['hero__title-text']}>
      <span className={styles['hero__title-first-part']}>Психолог</span>
      <span className={styles['hero__title-second-part']}>Марина Троц</span>
    </h1>
  );
};

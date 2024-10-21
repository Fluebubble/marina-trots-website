import React from 'react';
import styles from './Photo.module.scss';

interface Props {
  image: string;
  alt: string;
}

export const Photo: React.FC<Props> = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className={styles.photo}
    />
  );
};

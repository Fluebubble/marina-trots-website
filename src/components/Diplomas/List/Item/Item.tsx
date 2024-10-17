import React from 'react';
import styles from './Item.module.scss';

interface Props {
  image: string;
  thumb: string;
  alt: string;
  name: string;
}

export const Item: React.FC<Props> = ({ image, thumb, alt, name }) => {
  return (
    <a
      href={image}
      className={styles.link}
    >
      <div className={styles['image-container']}>
        <img
          src={thumb}
          alt={alt}
          className={styles.image}
        />
      </div>
      <p className={styles.name}>{name}</p>
    </a>
  );
};

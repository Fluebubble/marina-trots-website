import React from 'react';
import styles from './BulletItem.module.scss';

interface Props {
  text: string;
}

export const BulletItem: React.FC<Props> = ({ text }) => {
  return <li className={styles.item}>{text}</li>;
};

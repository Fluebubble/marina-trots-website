import React from 'react'
import styles from './BulletList.module.scss';
import { BulletItem } from './BulletItem/Bulletltem';

export const BulletList = () => {
  return (
    <ul className={styles.bullets}>
      <BulletItem text="практический опыт 15 лет" />
      <BulletItem text="+23 000 часов консультаций" />
      <BulletItem text="онлайн и офлайн прием" />
      {/* <li className="hero__bullets-list-item">практический опыт 15 лет</li>
      <li className="hero__bullets-list-item">+23 000 часов консультаций</li>
      <li className="hero__bullets-list-item">онлайн и офлайн прием</li> */}
    </ul>
  );
};

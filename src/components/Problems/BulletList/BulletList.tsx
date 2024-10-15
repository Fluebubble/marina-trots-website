import React from 'react';
import { ListItem } from './ListItem/ListItem';
import styles from './BulletList.module.scss';

export const BulletList = () => {
  return (
    <ul className={styles.list}>
      <ListItem
        text="Депрессия"
        image="#stress_2"
      />
      <ListItem
        text="Стрессы разной сложности"
        image="#stress_1"
      />
      <ListItem
        text="Сексуальные проблемы"
        image="#kiss"
      />
      <ListItem
        text="Тревожность, фобии и страхия"
        image="#anxiety"
      />
      <ListItem
        text="Панические атаки"
        image="#panic"
      />
      <ListItem
        text="Низкая самооценка"
        image="#mirror"
      />
      <ListItem
        text="Психосоматические заболевания"
        image="#pain"
      />
      <ListItem
        text="Навязчивые мысли и действия"
        image="#repeat"
      />
    </ul>
  );
};

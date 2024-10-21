import React from 'react';
import { MessangerIconsNames } from '@/types/messangerIconsNames';
import styles from './MessangerItem.module.scss';

interface Props {
  link: string;
  icon: MessangerIconsNames;
}

export const MessangerItem: React.FC<Props> = ({ link, icon }) => {
  return (
    <li className={styles['messanger-item']}>
      <a
        href={link}
        className="header__socials-link"
        target="_blank"
        rel="noreferrer"
      >
        <svg className={styles['icon']}>
          <use href={`./img/sprite/symbol-defs-opti.svg#${icon}`}></use>
        </svg>
      </a>
    </li>
  );
};

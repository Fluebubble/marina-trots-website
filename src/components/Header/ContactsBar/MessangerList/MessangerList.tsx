import React from 'react'
import { MessangerItem } from './MessangerItem/MessangerItem';
import styles from './MessangerList.module.scss';
import { MessangerIconsNames } from '../../../../types/messangerIconsNames';

// interface Props {
//   children: React.ReactNode;
// }

export const MessangerList = () => {
  return (
    <ul className={styles['messanger-list']}>
      <MessangerItem
        link="https://t.me/Marinatrots"
        icon={MessangerIconsNames.Telegram}
      />
      <MessangerItem
        link="https://api.whatsapp.com/send?phone=380631095844"
        icon={MessangerIconsNames.WhatsApp}
      />
      <MessangerItem
        link="viber://chat?number=%2B380631095844"
        icon={MessangerIconsNames.Viber}
      />
      {/* <li className="header__socials-item">
        <a
          href="https://t.me/Marinatrots"
          className="header__socials-link"
          target="_blank"
        >
          <svg className="header__socials-image">
            <use href="./img/sprite/symbol-defs-opti.svg#telegram"></use>
          </svg>
        </a>
      </li>
      <li className="header__socials-item">
        <a
          href="https://api.whatsapp.com/send?phone=380631095844"
          className="header__socials-link"
          target="_blank"
        >
          <svg className="header__socials-image">
            <use href="./img/sprite/symbol-defs-opti.svg#whatapp"></use>
          </svg>
        </a>
      </li>
      <li className="header__socials-item">
        <a
          href="viber://chat?number=%2B380631095844"
          className="header__socials-link"
          target="_blank"
        >
          <svg className="header__socials-image">
            <use href="./img/sprite/symbol-defs-opti.svg#viber"></use>
          </svg>
        </a>
      </li> */}
    </ul>
  );
};

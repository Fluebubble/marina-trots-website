// import { Container } from '../../Container/Container';
import styles from './ContactsBar.module.scss';
import { MessangerList } from './MessangerList/MessangerList';
import { PhoneCTA } from './PhoneCTA/PhoneCTA';

export const ContactsBar = () => {
  return (
    <header className="header">
      {/* <div className="container"> */}
        <div className={styles['header__inner']}>
          <MessangerList />
          {/* <ul className={styles['header__socials-list']}>
            <li className="header__socials-item">
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
            </li>
          </ul> */}
          <PhoneCTA />
          {/* <a
            href="tel:+380631095844"
            className="phone"
          >
            <span className="phone__cta">Остались вопросы? Звоните!</span>
            <span className="phone__number">+38 063 109 58 44</span>
          </a> */}
        </div>
      {/* </div> */}
    </header>
  );
};

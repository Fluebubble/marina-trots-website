import React from "react";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.wrapper}>
      <p className="cta">Вы можете подзвонити мені по телефону:</p>
      <div className={styles["phone-list"]}>
        <a href="tel:+38(063)1095844" className={styles["phone-list__item"]}>
          +38 (063) 109 58 44
        </a>
        <a href="tel:+38(067)2171180" className={styles["phone-list__item"]}>
          +38 (067) 217 11 80
        </a>
      </div>
      <p className={styles["messanger-cta"]}>
        Чи написати в зручний для вас месенджер:
      </p>
      <ul className={styles["messanger-list"]}>
        <li className={styles["messanger-item"]}>
          <a
            href="https://t.me/Marinatrots"
            className={styles["messanger-link"]}
          >
            <svg className={styles["messanger-icon"]}>
              <use href="./img/sprite/symbol-defs-opti.svg#telegram"></use>
            </svg>
            Telegram
          </a>
        </li>
        <li className={styles["messanger-item"]}>
          <a
            href="viber://chat?number=%2B380631095844"
            className={styles["messanger-link"]}
          >
            <svg className={styles["messanger-icon"]}>
              <use href="./img/sprite/symbol-defs-opti.svg#viber"></use>
            </svg>
            Viber
          </a>
        </li>
        <li className={styles["messanger-item"]}>
          <a
            href="https://api.whatsapp.com/send?phone=380631095844"
            className={styles["messanger-link"]}
          >
            <svg className={styles["messanger-icon"]}>
              <use href="./img/sprite/symbol-defs-opti.svg#whatapp"></use>
            </svg>
            WhatsApp
          </a>
        </li>
      </ul>
    </address>
  );
};

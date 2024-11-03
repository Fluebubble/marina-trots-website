import React from "react";
import styles from "./ContactForm.module.scss";
import { Title } from "../Title/Title";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";

export const ContactForm = () => {
  return (
    <section className="section feedback" id="feedback">
      <Title text="Свяжитесь со мной" />
      <div className={styles.content}>
        {/* <form action="" className="form" id="form" name="bottom-form">
          <p className="form__cta cta">
            Оставьте заявку в данной форме и я свяжусь с Вами в ближайшее время
          </p>
          <label className="form__label" htmlFor="name">
            Как вас зовут?
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
          />
          <label className="form__label" htmlFor="number">
            Ваш телефон
          </label>
          <input
            className="form__input"
            type="text"
            id="number"
            name="number"
            placeholder="(093)-555-22-44"
          />
          <button className="form-button">Оставить заявку</button>
          <p className="form-info">*Ваши данные никуда не передаются</p>
        </form> */}
        <Form />
        <Contacts />
        {/* <address className="contacts">
          <p className="cta">Вы можете позвонить мне по телефону:</p>
          <div className="contacts__phone-wrapper">
            <a href="tel:+38(063)1095844" className="contacts__phone">
              +38 (063) 109 58 44
            </a>
            <a href="tel:+38(067)2171180" className="contacts__phone">
              +38 (067) 217 11 80
            </a>
          </div>
          <p className="contacts__cta cta">
            Или написать в удобный для вас мессенджер:
          </p>
          <ul className="contacts__messanger-list">
            <li className="contacts__messanger-item">
              <a
                href="https://t.me/Marinatrots"
                className="contacts__messanger-link"
              >
                <svg className="contacts__messanger-icon">
                  <use href="./img/sprite/symbol-defs-opti.svg#telegram"></use>
                </svg>
                Telegram
              </a>
            </li>
            <li className="contacts__messanger-item">
              <a
                href="viber://chat?number=%2B380631095844"
                className="contacts__messanger-link"
              >
                <svg className="contacts__messanger-icon">
                  <use href="./img/sprite/symbol-defs-opti.svg#viber"></use>
                </svg>
                Viber
              </a>
            </li>
            <li className="contacts__messanger-item">
              <a
                href="https://api.whatsapp.com/send?phone=380631095844"
                className="contacts__messanger-link"
              >
                <svg className="contacts__messanger-icon">
                  <use href="./img/sprite/symbol-defs-opti.svg#whatapp"></use>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </address> */}
      </div>
    </section>
  );
};

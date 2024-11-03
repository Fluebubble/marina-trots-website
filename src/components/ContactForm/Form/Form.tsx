import React from "react";
import styles from "./Form.module.scss";
import cn from "classnames";

export const Form = () => {
  return (
    <form action="" className={styles.form} id="form" name="bottom-form">
      <p className={cn("cta", styles.cta)}>
        Оставьте заявку в данной форме и я свяжусь с Вами в ближайшее время
      </p>
      <label className={styles.label} htmlFor="name">
        Как вас зовут?
      </label>
      <input
        className={styles.input}
        type="text"
        id="name"
        name="name"
        placeholder="Ваше имя"
      />
      <label className={styles.label} htmlFor="number">
        Ваш телефон
      </label>
      <input
        className={styles.input}
        type="text"
        id="number"
        name="number"
        placeholder="(093)-555-22-44"
      />
      <button className={styles.button}>Оставить заявку</button>
      <p className={styles.info}>*Ваши данные никуда не передаются</p>
    </form>
  );
};

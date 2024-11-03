import React, { useState } from "react";
import styles from "./Form.module.scss";
import cn from "classnames";
import { sendDataToBot } from "../../../api/form-to-telegram";

export const Form = () => {
  const [name, setName] = useState("Name");
  const [phone, setPhone] = useState("");

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendDataToBot(name, phone);

    setName("");
    setPhone("");
  };

  return (
    <form
      className={styles.form}
      id="form"
      name="bottom-form"
      onSubmit={submitFormHandler}
    >
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Оставить заявку
      </button>
      <p className={styles.info}>*Ваши данные никуда не передаются</p>
    </form>
  );
};

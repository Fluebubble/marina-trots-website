import React, { useState } from "react";
import styles from "./Form.module.scss";
import cn from "classnames";
import { sendDataToBot } from "../../../api/form-to-telegram";

export const Form = () => {
  const [name, setName] = useState("");
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
      Залишіть заявку в цій формі і я зв&apos;яжуся з Вами найближчим часом
      </p>
      <label className={styles.label} htmlFor="name">
        Як вас звати?
      </label>
      <input
        className={styles.input}
        type="text"
        id="name"
        name="name"
        placeholder="Ваше ім'я"
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
        Залишити заявку
      </button>
      <p className={styles.info}>*Ваші дані нікуди не передаються</p>
    </form>
  );
};

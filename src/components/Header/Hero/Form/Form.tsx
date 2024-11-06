import React, { useState } from "react";
import styles from "./Form.module.scss";
import { sendDataToBot } from "../../../../api/form-to-telegram";

export const Form = () => {
  const [phone, setPhone] = useState("");

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendDataToBot("Noname", phone);

    setPhone("");
  };

  return (
    <form
      className={styles.form}
      name="contact-form"
      id="hero-form"
      onSubmit={submitFormHandler}
    >
      <input
        type="number"
        className={styles.input}
        placeholder="Ваш номер"
        name="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className={styles.button}>Оставить заявку</button>
    </form>
  );
};

import React from "react";
import styles from "./ContactForm.module.scss";
import { Title } from "../Title/Title";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import cn from "classnames";

export const ContactForm = () => {
  return (
    <section className={cn("section", styles["contact-form"])} id="feedback">
      <Title text="Св'яжіться зі мною" />
      <div className={styles.content}>
        <Form />
        <Contacts />
      </div>
    </section>
  );
};

import React from "react";
import styles from "./FAQList.module.scss";
import data from "../../data/psy-directions.json";
import { ListItem } from "./FAQItem/FAQItem";

export const FAQList = () => {
  return (
    <div className={styles.wrapper}>
      <dl className={styles.list}>
        {data.map(({ id, title, text }) => (
          <ListItem key={id} title={`${id}. ${title}`} text={text} />
        ))}
      </dl>
    </div>
  );
};

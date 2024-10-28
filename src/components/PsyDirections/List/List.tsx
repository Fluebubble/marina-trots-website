import React from "react";
import styles from "./List.module.scss";
import data from "../../../data/psy-directions.json";
import { ListItem } from "./ListItem/ListItem";

export const List = () => {
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

import React from "react";
import styles from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";
import data from "../../../../public/data/preferences.json";

export const List = () => {
  return (
    <ul className={styles["preference-list"]}>
      {data.map(({ id, image, text }) => (
        <ListItem key={id} image={image} text={text} />
      ))}
    </ul>
  );
};

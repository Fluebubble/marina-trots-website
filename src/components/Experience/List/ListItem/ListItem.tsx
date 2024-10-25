import React from "react";
import styles from "./ListItem.module.scss";

interface Props {
  image: string;
  text: string;
}

export const ListItem: React.FC<Props> = ({ image, text }) => {
  return (
    <li className={styles["list-item"]}>
      <svg className={styles.image}>
        <use href={`./img/sprite/symbol-defs-opti.svg${image}`}></use>
      </svg>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

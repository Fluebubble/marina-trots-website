import React from "react";
import styles from "./FAQList.module.scss";
import { ListItem } from "./FAQItem/FAQItem";

interface Props {
  data: {
    id: number;
    title: string;
    text: string;
  }[];
}

export const FAQList: React.FC<Props> = ({ data }) => {
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

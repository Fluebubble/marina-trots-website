import React, { useState } from "react";
import styles from "./FAQItem.module.scss";
import cn from "classnames";

interface Props {
  title: string;
  text: string;
  index: number;
}

export const FAQItem: React.FC<Props> = ({ title, text, index }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <dt className={styles.name}>
        <button className={styles.button} onClick={handleToggleDescription}>
          <span className={styles["button-name"]}>{`${index}. ${title}`}</span>
          <svg
            className={cn(styles["button-image"], {
              [styles["button-image--expanded"]]: isDescriptionExpanded,
            })}
          >
            <use href="./img/sprite/symbol-defs-opti.svg#expand"></use>
          </svg>
        </button>
      </dt>
      <dd
        className={cn({
          "is-hidden": !isDescriptionExpanded,
          [styles.description]: isDescriptionExpanded,
        })}
        onClick={handleToggleDescription}
      >
        <p className="text">{text}</p>
      </dd>
    </div>
  );
};

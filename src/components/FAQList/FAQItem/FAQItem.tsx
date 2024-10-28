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
        <button
          className={styles.button}
          onClick={handleToggleDescription}
          // data-direction="direction1"
        >
          <span className={styles["button-name"]}>{`${index + 1}. ${title}`}</span>
          <svg className={styles["button-image"]}>
            <use href="./img/sprite/symbol-defs-opti.svg#expand"></use>
          </svg>
          {/* <img
            src="img/svg-icons/expand.svg"
            alt="Показать больше"
            className={styles["button-image"]}
          /> */}
        </button>
      </dt>
      <dd
        className={cn({
          "is-hidden": !isDescriptionExpanded,
          [styles.description]: isDescriptionExpanded,
        })}
        data-type="description"
      >
        <p className="text">{text}</p>
      </dd>
    </div>
  );
};

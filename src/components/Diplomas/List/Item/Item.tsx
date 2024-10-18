import React from "react";
import styles from "./Item.module.scss";
import { Certificate } from "../../../../types/certificate";

// interface Props {
//   image: string;
//   thumb: string;
//   alt: string;
//   name: string;
// }

export const Item: React.FC<Omit<Certificate, "id">> = ({ image, thumb, alt, title }) => {
  return (
      <a href={image} className={styles.link}>
        <div className={styles["image-container"]}>
          <img src={thumb} alt={alt} className={styles.image} />
        </div>
        <p className={styles.name}>{title}</p>
      </a>
  );
};

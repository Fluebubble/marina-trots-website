import React from "react";
import styles from "./Item.module.scss";
import { Certificate } from "../../../../types/certificate";

interface Props extends Certificate {
  setCurrentSlideId: React.Dispatch<
    React.SetStateAction<Pick<Certificate, "id"> | null>
  >;
}

export const Item: React.FC<Props> = ({
  image,
  thumb,
  alt,
  title,
  id,
  setCurrentSlideId,
}) => {
  const imageClickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: Pick<Certificate, "id">
  ) => {
    e.preventDefault();
    setCurrentSlideId(id);
  };

  return (
    <a
      href={image}
      className={styles.link}
      onClick={(e) => imageClickHandler(e, {id})}
    >
      <div className={styles["image-container"]}>
        <img src={thumb} alt={alt} className={styles.image} />
      </div>
      <p className={styles.name}>{title}</p>
    </a>
  );
};

import React from "react";
import { ListItem } from "./ListItem/ListItem";
import styles from "./ProblemList.module.scss";

interface Props {
  problems: {
    text: string;
    image: string;
    id: number;
  }[];
}

export const ProblemList: React.FC<Props> = ({ problems }) => {
  return (
    <ul className={styles.list}>
      {problems.map(({ text, image, id }) => (
        <ListItem key={id} text={text} image={image} />
      ))}
      {/* <ListItem text="Депресія" image="#stress_2" />
      <ListItem text="Стреси різної складності" image="#stress_1" />
      <ListItem text="Сексуальні проблеми" image="#kiss" />
      <ListItem text="Тривожність, фобії та страхія" image="#anxiety" />
      <ListItem text="Панічні атаки" image="#panic" />
      <ListItem text="Низька самооцінка" image="#mirror" />
      <ListItem text="Психосоматичні захворювання" image="#pain" />
      <ListItem text="Нав'язливі думки та дії" image="#repeat" /> */}
    </ul>
  );
};

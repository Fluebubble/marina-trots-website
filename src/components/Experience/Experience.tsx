import React from "react";
import { Title } from "../Title/Title";
import { List } from "./List/List";
import styles from "./Experience.module.scss";
import cn from "classnames";
import { Text } from "../Text/Text";

export const Experience = () => {
  return (
    <section className={cn(styles.experience, "section")}>
      <Title text="Мій досвід" />
      <div className={styles.content}>
        <Text
          text={`Вже понад 13 років я віддала справі свого життя і залишаюся вдячна тому, що надання допомоги іншим робить мене справді щасливою.

Величезне задоволення мені дає спостереження за реальними, позитивними змінами в житті людей, з якими мені доводилося працювати.

Якщо ви перебуваєте на роздоріжжі життєвих шляхів, якщо ви опинилися в «підвішеному» стані і не можете знайти точку опори, вас розривають невирішені питання, зробіть крок і зверніться до фахівця.

Чим довше ви залишаєтеся віч-на-віч із проблемою, тим більше ймовірності, що вона впливатиме на якість життя в різних сферах.`}
        />
        <List />
      </div>
    </section>
  );
};

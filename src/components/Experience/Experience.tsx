import React from "react";
import { Title } from "../Title/Title";
import { List } from "./List/List";
import styles from "./Experience.module.scss";
import cn from "classnames";

export const Experience = () => {
  return (
    <section className={cn(styles.experience, "section")}>
      <Title text="Мой опыт" />
      <div className={styles.content}>
        <div className={cn("text-bg", styles["text-bg"])}>
          <p className={styles.text}>
            Уже более 13 лет я отдала делу своей жизни и остаюсь благодарна
            тому, что оказание помощи другим делает меня воистину счастливой.
            <br />
            <br />
            Огромное удовольствие мне доставляет наблюдение за реальными,
            позитивными изменениями в жизни людей, с которыми мне доводилось
            работать.
            <br />
            <br />
            Если вы находитесь на перепутье жизненных дорог, если вы оказались в
            «подвешенном» состоянии и не можете найти точку опоры, вас разрывают
            нерешенные вопросы, сделайте шаг и обратитесь к специалисту.
            <br />
            <br />
            Чем дольше вы остаетесь один на один с проблемой, тем больше
            вероятности, что она станет влиять на качество жизни в разных
            сферах.
          </p>
        </div>
        <List />
      </div>
    </section>
  );
};

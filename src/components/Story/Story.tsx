import React from "react";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import styles from "./Story.module.scss";

const StoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className={styles.photo} />
);

const ContactButton = ({ href, label }: { href: string; label: string }) => (
  <a className={styles.button} href={href}>
    {label}
  </a>
);

export const Story = () => {
  return (
    <section className="section">
      <Title text="Моя історія" />
      <div className={styles.content}>
        <div className={styles["right-column"]}>
          <Text
            text={`Кажуть, що тільки труднощі змушують людину розвиватися та пізнавати себе. Не знаю, як це стосується більшості людей, але це точно про мене. Саме завдяки тому, що в якийсь момент свого життя я потрапила в глухий кут, мені довелося багато що переглянути і переосмислити.

Я зрозуміла, що дві вищі освіти, сім'я і двоє дітей не є запорукою мого щастя. Тоді прийшло усвідомлення, що я хочу навчитися чути себе, і виходом стало знайомство з великою кількістю психотерапевтичних напрямків. А третя освіта — нарешті, моя улюблена, психологічна — стала ключем до мого внутрішнього зростання.

У той момент я зрозуміла, що самостійно не в змозі розібратися зі своїми проблемами. Я вперше погодилася з тим, що психологія та психотерапія — це професія, а не просто розмовний жанр.

Тепер я з радістю ділюся всім тим, що здобула за роки навчання, практики, самопізнання. Зараз мене переповнює вдячність усім, хто ризикує вирушити в подорож, яка не має кінця — подорож у себе.`}
          />
        </div>
        <div className={styles["left-column"]}>
          <StoryImage src="./img/elements/photo-1.png" alt="Марина Троц" />
          <ContactButton href="#feedback" label="Залишити заявку" />
        </div>
      </div>
    </section>
  );
};

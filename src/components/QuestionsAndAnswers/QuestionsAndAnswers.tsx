import React from "react";
import { Title } from "../Title/Title";
import { FAQList } from "../FAQList/FAQList";
import data from "../../data/faq.json";

export const QuestionsAndAnswers = () => {
  return (
    <section className="section">
      <Title text="Часто задаваемые вопросы" />
      <FAQList data={data} />
    </section>
  );
};

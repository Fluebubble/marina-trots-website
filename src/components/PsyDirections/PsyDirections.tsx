import React from "react";
// import styles from "./PsyDirections.module.scss";
import { Title } from "../Title/Title";
import { FAQList } from "../FAQList/FAQList";
import data from "../../data/psy-directions.json";

export const PsyDirections = () => {
  return (
    <section className="section psy-directions">
      <Title text="Напрями з якими я працюю" />
      <FAQList data={data} />
    </section>
  );
};

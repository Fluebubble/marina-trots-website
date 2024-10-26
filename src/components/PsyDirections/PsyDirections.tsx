import React from "react";
// import styles from "./PsyDirections.module.scss";
import { Title } from "../Title/Title";
import { List } from "./List/List";

export const PsyDirections = () => {
  return (
    <section className="section psy-directions">
      <Title text="Направления с которыми я работаю" />
      <List />
    </section>
  );
};

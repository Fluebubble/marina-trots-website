import React from "react";
import { ProblemList } from "./ProblemList/ProblemList";
import { Title } from "../Title/Title";
import data from "./data.json";

export const Problems = () => {
  return (
    <section className="section section__problems">
      <Title text="З якими проблемами я працюю" />
      <ProblemList problems={data} />
    </section>
  );
};

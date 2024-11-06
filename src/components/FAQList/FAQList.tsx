import React, { useEffect, useState } from "react";
import styles from "./FAQList.module.scss";
import { FAQItem } from "./FAQItem/FAQItem";
import { DeviceSizes } from "../../types/deviceSizes";
import { useMediaQuery } from "react-responsive";
import { QuestionAnswer } from "../../types/faq";
import cn from "classnames";

interface Props {
  data: QuestionAnswer[];
}

export const FAQList: React.FC<Props> = ({ data }) => {
  const isTablet = useMediaQuery({ minWidth: DeviceSizes.tablet });
  const renderTwoColumn = data.length > 1 && isTablet;

  return (
    <div className={styles.wrapper}>
      {renderTwoColumn ? (
        <TwoColumn data={data} />
      ) : (
        <dl className={styles.list}>
          {data.map(({ id, title, text }, idx) => (
            <FAQItem key={id} title={title} text={text} index={idx + 1} />
          ))}
        </dl>
      )}
    </div>
  );
};

const TwoColumn: React.FC<Props> = ({ data }) => {
  const [firstColumnElements, setFirstColumnElements] = useState<
    QuestionAnswer[]
  >([]);
  const [secondColumnElements, setSecondColumnElements] = useState<
    QuestionAnswer[]
  >([]);

  useEffect(() => {
    const firstColumnElementsKeks: QuestionAnswer[] = [];
    const secondColumnElementsKeks: QuestionAnswer[] = [];

    data.forEach((question, index) => {
      console.log(question, index);

      if (index % 2 === 0) {
        firstColumnElementsKeks.push(question);
      } else {
        secondColumnElementsKeks.push(question);
      }

      setFirstColumnElements(firstColumnElementsKeks);
      setSecondColumnElements(secondColumnElementsKeks);
    });
  }, [data]);

  const secondColumnStartIndex = data.length / 2;

  return (
    <>
      <>
        <dl className={cn(styles.list, styles["first-column"])}>
          {firstColumnElements.map(({ id, title, text }, index) => {
            console.log(index + 2, "firstcolumn");

            return (
              <FAQItem key={id} title={title} text={text} index={index + 1} />
            );
          })}
        </dl>

        <dl className={cn(styles.list, styles["second-column"])}>
          {secondColumnElements.map(({ id, title, text }, index) => (
            <FAQItem
              key={id}
              title={title}
              text={text}
              index={index + secondColumnStartIndex + 1}
            />
          ))}
        </dl>
      </>
    </>
  );
};

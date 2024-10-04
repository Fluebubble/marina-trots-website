import React from 'react';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import styles from './Story.module.scss';

const StoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className={styles.photo}
  />
);

const ContactButton = ({ href, label }: { href: string; label: string }) => (
  <a
    className={styles.button}
    href={href}
  >
    {label}
  </a>
);

export const Story = () => {
  return (
    <section className="section story">
      {/* <div className="container"> */}
      <Title text="Моя история" />
      <div className={styles.content}>
        <Text
          text="Говорят, что только трудности заставляют человека развиваться и познавать себя. Не знаю, как это относится к большинству людей, но это точно про меня. Именно благодаря тому, что в какой-то момент своей жизни я зашла в тупик, мне пришлось многое пересмотреть и переосмыслить. Я поняла, что два высших образования, семья и двое детей не являются залогом моего счастья. Тогда пришло осознание, что я хочу научиться слышать себя и выходом оказалось знакомство с большим количеством психотерапевтических направлений и третье, наконец - то самое любимое, психологическое образование.

В тот момент я поняла, что самостоятельно не в состоянии разобраться со своими проблемами. Я впервые согласилась с тем, что психология и психотерапия — это профессия, а не просто разговорный жанр. Теперь я с радостью делюсь всем тем, что приобрела за годы обучения, практики, самопознания.

Сейчас меня переполняет благодарность всем, кто рискует отправиться в путешествие у которого нет конца — путешествие в себя."
        />
        <StoryImage
          src="./img/elements/photo-1.png"
          alt="Марина Троц"
        />
        <ContactButton
          href="#feedback"
          label="Свяжитесь со мной"
        />
        {/* <img
          src="./img/elements/photo-1.png"
          alt="Марина Троц"
          className="story__photo"
        /> */}
        {/* <a
          className="cta-button"
          href="#feedback"
        >
          Свяжитесь со мной
        </a> */}
      </div>
      {/* </div> */}
    </section>
  );
};

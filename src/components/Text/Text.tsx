import React from 'react';
import styles from './Text.module.scss';

interface Props {
  text: string;
}

export const Text: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {text}
        {/* Говорят, что только трудности заставляют человека развиваться и
        познавать себя. Не знаю, как это относится к большинству людей, но это
        точно про меня. Именно благодаря тому, что в какой-то момент своей жизни
        я зашла в тупик, мне пришлось многое пересмотреть и переосмыслить. Я
        поняла, что два высших образования, семья и двое детей не являются
        залогом моего счастья. Тогда пришло осознание, что я хочу научиться
        слышать себя, и выходом оказалось знакомство с большим количеством
        психотерапевтических направлений и третье, наконец-то самое любимое,
        психологическое образование.
        <br />
        <br />
        В тот момент я поняла, что самостоятельно не в состоянии разобраться со
        своими проблемами. Я впервые согласилась с тем, что психология и
        психотерапия — это профессия, а не просто разговорный жанр. Теперь я с
        радостью делюсь всем тем, что приобрела за годы обучения, практики,
        самопознания. <br />
        <br />
        Сейчас меня переполняет благодарность всем, кто рискует отправиться в
        путешествие у которого нет конца — путешествие в себя. */}
      </p>
    </div>
  );
};

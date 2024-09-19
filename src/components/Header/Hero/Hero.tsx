import { BulletList } from './BulletList/BulletList';
import { Form } from './Form/Form';
import styles from './Hero.module.scss';
import { MainTitle } from './MainTitle/MainTitle';
import { Photo } from './Photo/Photo';
import { Subtitle } from './Subtitle/Subtitle';

export const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['content']}>
        <MainTitle />
        <Subtitle />
        <BulletList />
        <Photo
          image={'img/hero/main-photo.jpg'}
          alt="Марина Троц"
        />
        <Form />
      </div>
    </div>
  );
};

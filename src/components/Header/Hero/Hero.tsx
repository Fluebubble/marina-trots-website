import { BulletList } from './BulletList/BulletList';
import styles from './Hero.module.scss';
import { MainTitle } from './MainTitle/MainTitle';
import { Photo } from './Photo/Photo';
import { Subtitle } from './Subtitle/Subtitle';

export const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className="hero__inner">
        <MainTitle />
        <Subtitle />
        <BulletList />
        <Photo
          image={'img/hero/main-photo.jpg'}
          alt="Марина Троц"
        />
        <form
          className="hero__contact-form"
          name="contact-form"
          id="hero-form"
        >
          <input
            type="number"
            className="hero__contact-form-input"
            placeholder="Ваш номер"
            name="number"
          />
          <button
            type="submit"
            className="hero__contact-form-button"
          >
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

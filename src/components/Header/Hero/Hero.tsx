import { BulletList } from './BulletList/BulletList';
import styles from './Hero.module.scss';
import { MainTitle } from './MainTitle/MainTitle';
import { Subtitle } from './Subtitle/Subtitle';

export const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className="hero__inner">
        <MainTitle />
        <Subtitle />
        <BulletList />
        <img
          src="img/hero/main-photo-mobile.jpg"
          alt="Марина Троц"
          className="hero__photo"
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

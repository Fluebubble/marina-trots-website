import styles from './Hero.module.scss';
import { MainTitle } from './MainTitle/MainTitle';

export const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className="hero__inner">
        <MainTitle />
        <div className="hero__subtitle">
          <p className="hero__subtitle-text">
            Консультация психолога - начало экологичного отношения к себе
          </p>
        </div>
        <ul className="hero__bullets-list">
          <li className="hero__bullets-list-item">практический опыт 15 лет</li>
          <li className="hero__bullets-list-item">
            +23 000 часов консультаций
          </li>
          <li className="hero__bullets-list-item">онлайн и офлайн прием</li>
        </ul>
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

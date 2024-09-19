import styles from './Form.module.scss';

export const Form = () => {
  return (
    <form
      className={styles.form}
      name="contact-form"
      id="hero-form"
    >
      <input
        type="number"
        className={styles.input}
        placeholder="Ваш номер"
        name="number"
      />
      <button
        type="submit"
        className={styles.button}
      >
        Оставить заявку
      </button>
    </form>
  );
};
